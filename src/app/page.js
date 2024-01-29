import { Container } from '@/shared/ui/layout/Container';
import { ChoiceSection } from '@/page/ChoiceSection';
import { ConstructorSection } from '@/page/ConstructorSection';
import { ResponseSection } from '@/page/ResponseSection';
import { GallerySection } from '@/page/GallerySection';
import { StorySection } from '@/page/StorySection';
import { ArticlePromoSection } from '@/page/ArticlePromoSection';

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
