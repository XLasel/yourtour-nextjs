'use client';

import { Section } from '@/shared/ui/layout/Section';
import { StoryCard } from '@/widgets/StoryCard';

import { storyInfo, stories } from '../config';

import { HoverActiveProvider } from '@/shared/context/HoverActiveContext';

import styles from './StorySection.module.scss';

export const StorySection = () => {
  const { title, subtitle } = storyInfo;

  return (
    <Section title={title} subtitle={subtitle} id="story">
      <div className={styles.flex}>
        {stories.map((story, index) => (
          <HoverActiveProvider key={index}>
            <StoryCard {...story} />
          </HoverActiveProvider>
        ))}
      </div>
    </Section>
  );
};
