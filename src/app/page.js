import { Container } from '@/shared/ui/layout/Container';
import { ChoiceSection } from '@/pages/ChoiceSection';
import { ConstructorSection } from '@/pages/ConstructorSection';
import { ResponseSection } from '@/pages/ResponseSection';
import { GallerySection } from '@/pages/GallerySection';
import { StorySection } from '@/pages/StorySection';
import { ArticlePromoSection } from '@/pages/ArticlePromoSection';

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
