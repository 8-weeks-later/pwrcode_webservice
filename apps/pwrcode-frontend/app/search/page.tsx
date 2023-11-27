import { SearchPage } from '../design/pages/Search/SearchPage';
import { SearchPageStory } from '../design/pages/Search/SearchPage.stories';

export default function Page() {
  return <SearchPage {...SearchPageStory.args} />;
}
