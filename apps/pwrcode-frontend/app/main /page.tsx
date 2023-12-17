import { MainPageStory } from '../design/pages/Main/MainPage.stories';
import { MainPage } from '../design/pages/Main/MainPage';

export default function Page() {
  return <MainPage {...MainPageStory.args} />;
}
