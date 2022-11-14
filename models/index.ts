import { Book as _Book } from './book'
import { BookRating as _BookRating } from './book_rating'
import { Comment as _Comment } from './comment'
import { Post as _Post } from './post'
import { User as _User } from './user'

export namespace KaliopeModel {
	export class Book extends _Book {}
	export class BookRating extends _BookRating {}
	export class Comment extends _Comment {}
	export class Post extends _Post {}
	export class User extends _User {}

	export const extraModels = [Book, BookRating, Comment, Post, User]
}
