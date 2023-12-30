import { Injectable } from '@nestjs/common';
import MeiliSearch, { Index, SearchParams } from 'meilisearch';

@Injectable()
export class SearchService {
  private _client: MeiliSearch;
  constructor() {
    this._client = new MeiliSearch({
      host: `http://${process.env.MEILISEARCH_HOST}/`,
    });
  }

  private getArticleIndex(): Index {
    return this._client.index('articles');
  }

  public async addDocuments(documents) {
    const index = this.getArticleIndex();

    return await index.addDocuments(documents);
  }

  public async search(text: string, searchParams?: SearchParams) {
    const index = this.getArticleIndex();
    return await index.search(text, searchParams);
  }

  public async deleteAllDocuments() {
    const index = this.getArticleIndex();
    return await index.deleteAllDocuments();
  }
}
