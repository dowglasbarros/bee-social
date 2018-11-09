type Post = {
  id: number;
  userId: number;
  userName: string;
  groupId: number;
  avatarPicture: string;
  description: string;
  pictures: [{
    src: string;
    alt: string;
  }],
  likes: number
}
