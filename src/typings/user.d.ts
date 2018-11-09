type User = {
  id: number;
  name: string;
  mail: string;
  position: string;
  city: string;
  cityWork: string;
  project: string;
  groups: {
    groupId: number,
    groupLabel: string,
    groupName: string,
    follow: boolean
  }[];
  password: string;
  firstAccess: boolean;
}