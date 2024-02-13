import { string, bool, oneOfType, arrayOf, shape, element } from 'prop-types';
import cx from 'classnames';

import { ListSection } from './ListSection';

import s from './Section.module.scss';

export const Section = ({
  title,
  isList,
  customClassForTop,
  options,
  subtitle,
  children,
  id,
}) => {
  return (
    <section className={s.root} id={id}>
      <div
        className={cx(s.top, customClassForTop, {
          [s['top--for-list']]: isList,
        })}
      >
        <h2>{title}</h2>
        {isList ? (
          <ListSection options={options} />
        ) : (
          <p className={s.subtitle}>{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: string.isRequired,
  isList: bool,
  customClassForTop: oneOfType([string, arrayOf(string)]),
  options: arrayOf(
    shape({
      category: string,
      text: string,
    }),
  ),
  subtitle: string,
  children: element,
  id: string.isRequired,
};
