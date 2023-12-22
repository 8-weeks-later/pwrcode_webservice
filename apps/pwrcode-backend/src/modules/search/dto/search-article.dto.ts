import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class SearchArticleDto {
  @ApiProperty({
    description: '???',
    example: '내장',
  })
  @IsNotEmpty()
  @Length(2, 255)
  text: string;
}
