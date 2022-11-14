import { User } from './user'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class Post {
	@ApiProperty({ type: String })
	postid: string = undefined

	@ApiPropertyOptional({ type: Date })
	created_at?: Date = undefined

	@ApiPropertyOptional({ type: Date })
	updated_at?: Date = undefined

	@ApiProperty({ type: String })
	title: string = undefined

	@ApiPropertyOptional({ type: String })
	subtitle?: string = undefined

	@ApiPropertyOptional({ type: String })
	header_image?: string = undefined

	@ApiProperty({ type: String })
	content: string = undefined

	@ApiProperty({ type: () => User })
	author: User = undefined

	@ApiProperty({ type: String })
	authorId: string = undefined
}
