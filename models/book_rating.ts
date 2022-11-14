import { User } from './user'
import { Book } from './book'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class BookRating {
	@ApiProperty({ type: String })
	bookratingid: string = undefined

	@ApiProperty({ type: () => User })
	author: User = undefined

	@ApiProperty({ type: String })
	authorid: string = undefined

	@ApiProperty({ type: () => Book })
	book: Book = undefined

	@ApiProperty({ type: String })
	bookid: string = undefined

	@ApiPropertyOptional({ type: Date })
	created_at?: Date = undefined

	@ApiPropertyOptional({ type: Date })
	updated_at?: Date = undefined
}
