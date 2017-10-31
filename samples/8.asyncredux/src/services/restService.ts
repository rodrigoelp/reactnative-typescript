const serviceUrl = "https://jsonplaceholder.typicode.com";
const usersBaseUrl = `${serviceUrl}/users`;
const postsBaseUrl = `${serviceUrl}/posts`;
const albumsBaseUrl = `${serviceUrl}/albums`;
const photosBaseUrl = `${serviceUrl}/photos`;
const commentsBaseUrl = `${serviceUrl}/comments`;

class RestService {
    public static getPostsUrl = () => postsBaseUrl;
    public static getPostUrl = (id: number) => `${postsBaseUrl}/${id}`;

    public static getUsersUrl = () => usersBaseUrl;
    public static getUserUrl = (userId: number) => `${usersBaseUrl}/${userId}`;
    public static getUserAlbumsUrl = (userId: number) => `${albumsBaseUrl}?userId=${userId}`;
    public static getAlbumPhotosUrl = (albumId: number) => `${photosBaseUrl}?albumId=${albumId}`;
}

export { RestService };
