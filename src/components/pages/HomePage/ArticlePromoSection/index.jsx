import Image from 'next/image';

import s from './ArcticlePromoSection.module.scss';

export const ArticlePromoSection = () => {
  return (
    <article className={s.root}>
      <div className={s.content}>
        <Image
          className={s.img}
          src="/image/article/article-promo-photo.jpg"
          width={370}
          height={370}
          alt="Вид у горного водоема"
        />
        <div className={s.info}>
          <h3 className={s.title}>Пора в путешествие вместе с нами!</h3>
          <p className={s.text}>
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
