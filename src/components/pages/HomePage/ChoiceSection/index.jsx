import { Section } from '@commons/Section';
import { ChoiceList } from './ChoiceList';

import { choiceInfo } from './config';

import { TabProvider } from '@/context/TabContext';

export const ChoiceSection = () => {
  const { title, options } = choiceInfo;

  return (
    <TabProvider>
      <Section title={title} isList options={options} id="choice">
        <ChoiceList />
      </Section>
    </TabProvider>
  );
};
