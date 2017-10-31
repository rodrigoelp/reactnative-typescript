
enum ActivityStatus {
  NoActivity,
  Loading,
  Loaded,
  LoadingFailed,
}

interface IAppState {
  activityStatus: ActivityStatus;
  posts: IPost[];
  users: IUser[];
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: string;
  lng: string;
}

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export { ActivityStatus, IAppState, IPost, IUser, ICompany, IAddress, IGeo, IPhoto };
