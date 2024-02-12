import { Container } from '@commons/Container';
import { ChoiceSection } from './ChoiceSection';
import { ConstructorSection } from './ConstructorSection';
import { ResponseSection } from './ResponseSection';
import { GallerySection } from './GallerySection';
import { StorySection } from './StorySection';
import { ArticlePromoSection } from './ArticlePromoSection';

export default function HomePage() {
  return (
    <>
      <Container>
        <ChoiceSection />
      </Container>
      <Container>
        <ConstructorSection />
      </Container>
      <Container>
        <ResponseSection />
      </Container>
      <Container isFluid>
        <GallerySection />
      </Container>
      <Container>
        <StorySection />
      </Container>
      <Container>
        <ArticlePromoSection />
      </Container>
    </>
  );
}
