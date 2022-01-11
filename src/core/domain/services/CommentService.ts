import { Comment } from '../interfaces/Comment';

interface CommentService {
  replyComment: (params: {
    parentId: string;
    reply: Comment;
  }) => Promise<Comment>;

  updateComment: (params: {
    commentId: string;
    contents: unknown;
  }) => Promise<Comment>;

  createComment: (payload: {
    comment: Comment;
    postId: string;
  }) => Promise<Comment>;

  deleteComment: (params: { commentId: string }) => Promise<void>;
}

export { CommentService };
