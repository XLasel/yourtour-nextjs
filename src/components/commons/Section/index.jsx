import PropTypes from 'prop-types';
import cx from 'classnames';

import { ListSection } from './ListSection';

import s from './Section.module.scss';

export const Section = ({
  title,
  isList,
  className,
  customClassForTop,
  options,
  subtitle,
  children,
  id,
}) => {
  return (
    <section className={cx(s.section, className)} id={id}>
      <div
        className={cx(s.top, customClassForTop, {
          [s['top_for-list']]: isList,
        })}
      >
        <h2 className={s.title}>{title}</h2>
        {isList ? (
          <ListSection options={options} />
        ) : (
          <p className={s.subtitle}>{subtitle}</p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  isList: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  customClassForTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  subtitle: PropTypes.string,
  children: PropTypes.element,
  id: PropTypes.string.isRequired,
};
