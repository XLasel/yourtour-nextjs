import { Section } from '@/shared/ui/layout/Section';
import { ResponseCard } from '@/widgets/ResponseCard';

import { responseInfo, responseData } from '../config';

import styles from './ResponseSection.module.scss';

export const ResponseSection = () => {
  const { title, subtitle } = responseInfo;
  return (
    <Section title={title} subtitle={subtitle} id="response">
      <div className={styles.flex}>
        {responseData.map((user, id) => {
          return (
            <ResponseCard
              key={id}
              text={user.text}
              userName={user.name}
              selectedTour={user.tour}
              userAvatar={user.imageSrc}
            />
          );
        })}
      </div>
    </Section>
  );
};
