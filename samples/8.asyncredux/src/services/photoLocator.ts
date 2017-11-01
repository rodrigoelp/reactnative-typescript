import { isNullOrUndefined } from "../globalfunctions";
import { IAlbum, IPhoto, IUser } from "../models";
import { Fetcher } from "./fetcher";
import { RestService } from "./restService";

const unknownUserThumbImageUrl = "https://cdn0.iconfinder.com/data/icons/user-pictures/100/unknown2-64.png";
const unknownUserImageUrl = "https://cdn0.iconfinder.com/data/icons/user-pictures/100/unknown2-512.png";
const unknownPhoto: IPhoto = {
    albumId: 0,
    id: 0,
    thumbnailUrl: unknownUserThumbImageUrl,
    title: "I kno nothin",
    url: unknownUserImageUrl,
};

interface IUserPhoto {
    userId: number; photo: IPhoto;
}

class PhotoLocator {
    private static userPhotoCache: IUserPhoto[] = [];
    private static photoCache: IPhoto[] = [];
    private static albumCache: IAlbum[] = [];

    public getUnknownPhoto(): IPhoto {
        return unknownPhoto;
    }

    /**
     * Attempts to get the user profile picture.
     * @param userId user identifier as exposed by the user interface.
     * @description The api in use does not have a photo of the user as such.
     * It contains a list of albums with photos the user has uploaded. But,
     * I want to show a picture for the user and took the decision of picking
     * the first photo of the first album. If it doesn't have a any album, then
     * it will return the unknown user hosted in iconfinder.
     */
    public async getUserPhoto(userId: number): Promise<IPhoto> {
        // WARNING: this is not the best way for doing this.
        // Ideally there is a worker coordinating all the requests
        // for the same user to prevent pulling the same resource
        // mutliple times.

        // checking the quick cache first.
        const { albumCache, photoCache, userPhotoCache } = PhotoLocator;
        const userPhoto = this.getCachedUserPhoto(userId);
        if (!isNullOrUndefined(userPhoto)) {
            return userPhoto!;
        }

        console.debug(`Requested user photo not available in cache for: ${userId}`);
        const { albums, photos } = await this.downloadAlbumsAndPhotosOfUser(userId);

        this.persistInCacheIfRequired(userId, albums, photos);

        if (photos.length > 0) { // it was not in the cache, but was fetched from the network
            return photos[0];
        }

        // it was not cached, wasn't downloaded.
        return unknownPhoto;
    }

    private getCachedUserPhoto(userId: number): IPhoto | undefined {
        const register = PhotoLocator.userPhotoCache.find((p) => p.userId === userId);
        if (register === undefined) { // does javascript/typescript has optionals? couldn't find it in the doco.
            return undefined;
        }
        return register.photo;
    }

    private async downloadAlbumsAndPhotosOfUser(userId: number): Promise<{ albums: IAlbum[], photos: IPhoto[] }> {
        // let's download the content, put it in the cache and resolve from it.
        const albums = await Fetcher.fetchInstanceOf<IAlbum[]>(RestService.getUserAlbumsUrl(userId));
        const photos = await Promise.resolve(albums)
            .then((albs) => Promise.all(
                albs.map(
                    (a) => Fetcher.fetchInstanceOf<IPhoto[]>(RestService.getAlbumPhotosUrl(a.id)))))
            .then((ps) => flatten(ps))
            .then((ps) => ps.map(
                // at this point we have a list of photos...
                // the problem is the service returns it with http.
                // correcting that now.
                (p) => ({
                    ...p,
                    thumbnailUrl: p.thumbnailUrl.replace("http://", "https://"),
                    url: p.url.replace("http://", "https://"),
                })));
        return { albums, photos };
    }

    private persistInCacheIfRequired(userId: number, albums: IAlbum[], photos: IPhoto[]) {
        // this following statement is just a simple safe guard to prevent multiple
        // calls from adding the same information to the cache.
        // In reality it has several flaws and it doesn't prevent completely that rasing
        // condition... but I don't want to implement a lock function at the moment
        // (is not what I am trying to learn)
        // storing everything in the cache if nobody else has done it before.
        if (PhotoLocator.albumCache.filter((a) => a.userId === userId).length === 0) {
            PhotoLocator.albumCache = PhotoLocator.albumCache.concat(albums);
            PhotoLocator.photoCache = PhotoLocator.photoCache.concat(photos);
            if (photos.length > 0) {
                PhotoLocator.userPhotoCache = PhotoLocator.userPhotoCache
                    .concat({ userId, photo: photos[0] });
            }
        }
    }
}

function flatten<T>(m: T[][]): T[] {
    return m.reduce((acc, a) => acc.concat(a), []);
}

function fetchUserPhoto(): Promise<any> {
    return fetch("");
}

export { PhotoLocator };
