type Post = {
  userName: string;
  groupName: string;
  avatarPicture: string;
  description: string;
  pictures: [{
    src: string;
    alt: string;
  }],
  likes: number
}
