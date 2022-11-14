import { Post } from './post'
import { Comment } from './comment'
import { Book } from './book'
import { BookRating } from './book_rating'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class User {
	@ApiProperty({ type: String })
	uid: string = undefined

	@ApiProperty({ type: String })
	email: string = undefined

	@ApiPropertyOptional({ type: Boolean })
	emailVerified?: boolean = undefined

	@ApiPropertyOptional({ type: Boolean })
	isAnonymous?: boolean = true

	@ApiPropertyOptional({ type: String })
	displayName?: string = undefined

	@ApiPropertyOptional({ type: String })
	photoURL?: string = undefined

	@ApiPropertyOptional({ type: Date })
	createdAt?: Date = undefined

	@ApiPropertyOptional({ type: Date })
	lastLoginAt?: Date = undefined

	@ApiProperty({ isArray: true, type: () => Post })
	posts: Post[] = undefined

	@ApiProperty({ isArray: true, type: () => Comment })
	comments: Comment[] = undefined

	@ApiProperty({ isArray: true, type: () => Book })
	books: Book[] = undefined

	@ApiProperty({ isArray: true, type: () => BookRating })
	ratings: BookRating[] = undefined
}
