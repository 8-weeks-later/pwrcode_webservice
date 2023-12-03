import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchService } from '../search.service';
import { SearchArticleDto } from '../dto/search-article.dto';
import { data } from './documents/data';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get('/')
  public async getSearch(): Promise<void> {
    const resp = await this.searchService.addDocuments(data);

    console.log(resp);
  }

  @Post('/')
  public async searchArticle(@Body() search: SearchArticleDto) {
    return await this.searchService.search(search.text, {
      attributesToRetrieve: ['*'],
    });
  }
}
