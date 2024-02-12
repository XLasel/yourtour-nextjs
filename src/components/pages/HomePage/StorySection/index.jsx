'use client';

import { Section } from '@commons/Section';
import { StoryCard } from './StoryCard';

import { storyInfo, stories } from './config';

import { HoverActiveProvider } from '@/context/HoverActiveContext';

import s from './StorySection.module.scss';

export const StorySection = () => {
  const { title, subtitle } = storyInfo;

  return (
    <Section title={title} subtitle={subtitle} id="story">
      <div className={s['stories-container']}>
        {stories.map((story, index) => (
          <HoverActiveProvider key={index}>
            <StoryCard {...story} />
          </HoverActiveProvider>
        ))}
      </div>
    </Section>
  );
};
