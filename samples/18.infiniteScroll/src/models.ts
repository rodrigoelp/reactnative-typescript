
/** auto generated from the serviceby calling json2ts https://randomuser.me/api/?seed=1&page=1&results=1  */
interface IUserListResult {
  results: IUser[];
  info: IInfo;
}

interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface IUser {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: string;
  registered: string;
  phone: string;
  cell: string;
  id: IIdentifier;
  picture: IPicture;
  nat: string;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface IIdentifier {
  name: string;
  value?: string;
}

interface ILogin {
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface ILocation {
  street: string;
  city: string;
  state: string;
  postcode: number;
}

interface IName {
  title: string;
  first: string;
  last: string;
}
/** end of autogeneration */

enum RouteNames {
  UserList = "UserList",
  UserDetails = "UserDetails",
}

interface IUniqueUser extends IUser {
  uid: string;
}

export { IUserListResult, IInfo, IUser, IPicture, IIdentifier, ILogin, ILocation, IName, RouteNames, IUniqueUser };
