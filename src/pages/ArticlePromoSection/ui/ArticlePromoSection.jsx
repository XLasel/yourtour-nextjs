import Image from 'next/image';

import styles from './ArcticlePromoSection.module.scss';

export const ArticlePromoSection = () => {
  return (
    <article className={styles['article-promo']}>
      <div className={styles.content}>
        <Image
          className={styles.img}
          src="/image/article/article-promo-photo.jpg"
          width={370}
          height={370}
          alt="Вид у горного водоема"
        />
        <div className={styles.info}>
          <h3 className={styles.title}>Пора в путешествие вместе с нами!</h3>
          <p className={styles.text}>
            Напиши на почту и узнай подробности <br /> на{' '}
            <a href="mailto:yourtour@gmail.com?subject=Хочу получить консультацию по персональному подбору тура">
              yourtour@gmail.com
            </a>
          </p>
        </div>
      </div>
    </article>
  );
};
