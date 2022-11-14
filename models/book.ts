import { User } from './user'
import { Comment } from './comment'
import { BookRating } from './book_rating'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class Book {
	@ApiProperty({ type: String })
	bookid: string = undefined

	@ApiProperty({ type: () => User })
	author: User = undefined

	@ApiProperty({ type: String })
	authorid: string = undefined

	@ApiPropertyOptional({ type: String })
	cover?: string = undefined

	@ApiPropertyOptional({ type: Date })
	created_at?: Date = undefined

	@ApiPropertyOptional({ type: Date })
	updated_at?: Date = undefined

	@ApiProperty({ type: String })
	title: string = undefined

	@ApiProperty({ type: String })
	description: string = undefined

	@ApiProperty({ isArray: true, type: () => Comment })
	book_comments: Comment[] = undefined

	@ApiProperty({ isArray: true, type: () => BookRating })
	book_ratings: BookRating[] = undefined
}
