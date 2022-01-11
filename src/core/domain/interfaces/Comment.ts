import { User } from './User';

interface Comment {
  _id: string;
  contents: unknown;
  isParent: boolean;
  postedBy: User;
  replies?: Array<Comment>;
}

export { Comment };
