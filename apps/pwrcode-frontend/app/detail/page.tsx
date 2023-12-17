import { DetailPage } from '../design/pages/Detail/DetailPage';
import { DetailPageStory } from '../design/pages/Detail/DetailPage.stories';

export default function Page() {
  return <DetailPage {...DetailPageStory.args} />;
}
