
/** auto generated from the serviceby calling json2ts https://randomuser.me/api/?seed=1&page=1&results=1  */
interface UserListResult {
  results: Result[];
  info: Info;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: string;
  registered: string;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Id {
  name: string;
  value?: string;
}

interface Login {
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
}

interface Name {
  title: string;
  first: string;
  last: string;
}
/** end of autogeneration */

export { UserListResult, Info, Result, Picture, Id, Login, Location, Name };
