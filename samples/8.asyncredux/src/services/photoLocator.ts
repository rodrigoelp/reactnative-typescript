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
        // checking the quick cache first.
        const { albumCache, photoCache } = PhotoLocator;
        const userAlbums = albumCache.filter((a) => a.userId === userId);

        if (userAlbums.length > 0) {
            // there must be a cache we can access.
            const firstAlbum = userAlbums[0];
            return this.getFirstPhotoOfAlbum(firstAlbum.id);
        } else {
            console.debug(`Requested user photo not available in cache for: ${userId}`);
            // let's download the content, put it in the cache and resolve from it.
            const albums = await Fetcher.fetchInstanceOf<IAlbum[]>(RestService.getUserAlbumsUrl(userId));

            let photos =
                flatten(
                    await Promise.all(
                        albums.map(
                            async (a) =>
                                await Fetcher.fetchInstanceOf<IPhoto[]>(
                                    RestService.getAlbumPhotosUrl(a.id)))));

            // at this point we have a list of photos...
            // the problem is the service returns it with http.
            // correcting that now.
            photos = photos.map<IPhoto>((p) => {
                return {
                    ...p,
                    thumbnailUrl: p.thumbnailUrl.replace("http://", "https://"),
                    url: p.url.replace("http://", "https://"),
                };
            });

            // storing everything in the cache.
            PhotoLocator.albumCache = albumCache.concat(albums);
            PhotoLocator.photoCache = photoCache.concat(photos);

            if (photos.length > 0) { // it was not in the cache, but was fetched from the network
                return photos[0];
            }

            // it was not cached, wasn't downloaded.
            return unknownPhoto;
        }
    }

    private getFirstPhotoOfAlbum(albumId: number) {
        const photos = PhotoLocator.photoCache.filter((p) => p.albumId === albumId);
        if (photos.length > 0) {
            return photos[0];
        }
        return unknownPhoto;
    }
}

function flatten<T>(m: T[][]): T[] {
    return m.reduce((acc, a) => acc.concat(a), []);
}

function fetchUserPhoto(): Promise<any> {
    return fetch("");
}

export { PhotoLocator };
