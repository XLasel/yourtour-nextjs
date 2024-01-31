import { Container } from '@/shared/ui/layout/Container';
import { ChoiceSection } from '@/section/ChoiceSection';
import { ConstructorSection } from '@/section/ConstructorSection';
import { ResponseSection } from '@/section/ResponseSection';
import { GallerySection } from '@/section/GallerySection';
import { StorySection } from '@/section/StorySection';
import { ArticlePromoSection } from '@/section/ArticlePromoSection';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
