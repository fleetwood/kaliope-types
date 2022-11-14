import { User } from './user'
import { Book } from './book'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class Comment {
	@ApiProperty({ type: String })
	commentid: string = undefined

	@ApiProperty({ type: () => User })
	author: User = undefined

	@ApiProperty({ type: String })
	authorid: string = undefined

	@ApiPropertyOptional({ type: Date })
	created_at?: Date = undefined

	@ApiPropertyOptional({ type: Date })
	updated_at?: Date = undefined

	@ApiProperty({ type: String })
	content: string = undefined

	@ApiProperty({ type: () => Book })
	book: Book = undefined

	@ApiProperty({ type: String })
	bookid: string = undefined
}
