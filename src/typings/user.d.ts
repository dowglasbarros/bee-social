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
    groupName: string;
  }[];
  password: string;
  firstAccess: boolean;
}