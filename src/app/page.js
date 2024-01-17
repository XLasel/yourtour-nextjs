import styles from './page.module.scss'
import ChoiceSection from '@/components/ChoiceSection/ChoiceSection'
import Container from '@/components/layout/Container/Container'
import ConstructorSection from '@/components/ConstructorSection/ConstructorSection'
import ResponseSection from '@/components/ResponseSection/ResponseSection'
import GallerySection from '@/components/GallerySection/GallerySection'
import { photoArray } from '@/constants'
import StorySection from '@/components/StorySection/StorySection'
import ArticlePromoSection from '@/components/ArticlePromoSection/ArticlePromoSection'


export default function Home() {
  return (
    <main className={styles.main}>
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
        <GallerySection photos={photoArray} />
      </Container>
      <Container >
        <StorySection />
      </Container>
      <Container >
        <ArticlePromoSection />
      </Container>
    </main>
  )
}
