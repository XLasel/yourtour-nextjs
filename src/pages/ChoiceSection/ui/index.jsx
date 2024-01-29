import { Section } from '@/shared/ui/layout/Section';
import { ChoiceList } from './component/ChoiceList';

import { choiceInfo } from '../config';

import { TabProvider } from '@/shared/context/TabContext';

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
