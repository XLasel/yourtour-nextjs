import { Section } from '@commons/Section';
import { ResponseCard } from './ResponseCard';

import { responseInfo, responseData } from './config';

import s from './ResponseSection.module.scss';

export const ResponseSection = () => {
  const { title, subtitle } = responseInfo;
  return (
    <Section title={title} subtitle={subtitle} id="response">
      <div className={s.root}>
        {responseData.map((user, id) => (
          <ResponseCard
            key={id}
            text={user.text}
            userName={user.name}
            selectedTour={user.tour}
            userAvatar={user.imageSrc}
          />
        ))}
      </div>
    </Section>
  );
};
