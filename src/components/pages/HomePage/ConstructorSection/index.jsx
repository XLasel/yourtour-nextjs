import { Section } from '@commons/Section';
import { Form } from '@commons/Form';

import { constructorInfo } from './config';
import s from './ConstructorSection.module.scss';

export const ConstructorSection = () => {
  const { title, subtitle } = constructorInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      customClassForTop={s.top}
      id="constructor"
    >
      <Form />
    </Section>
  );
};
