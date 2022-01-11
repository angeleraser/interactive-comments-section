import { Comment } from '../interfaces/Comment';
import { User } from '../interfaces/User';

class PostComment implements Comment {
  _id: string;

  contents: unknown;

  isParent: boolean;

  postedBy: User;

  replies?: Comment[] | undefined;

  constructor({
    _id,
    contents,
    isParent,
    postedBy,
    replies
  }: {
    _id: string;
    contents: unknown;
    isParent: boolean;
    postedBy: User;
    replies?: Comment[] | undefined;
  }) {
    this._id = _id;
    this.contents = contents;
    this.isParent = isParent;
    this.postedBy = postedBy;
    this.replies = replies;
  }
}

class PostUser implements User {
  _id: string;

  username: string;

  image: string | null;

  constructor({
    _id,
    username,
    image
  }: {
    _id: string;
    username: string;
    image: string | null;
  }) {
    this._id = _id;
    this.username = username;
    this.image = image;
  }
}

export { PostComment, PostUser };
