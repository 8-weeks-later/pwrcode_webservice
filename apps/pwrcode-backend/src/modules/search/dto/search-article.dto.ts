import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class SearchArticleDto {
  @ApiProperty({
    description: '???',
    example: 'TEst',
  })
  @IsNotEmpty()
  @Length(2, 255)
  text: string;
}
