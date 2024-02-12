'use client';

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useTabContext } from '@/context/TabContext';

import s from './ListSection.module.scss';

export const ListSection = ({ options }) => {
  const { activeTab, updateActiveTab } = useTabContext();

  const handleTabChange = (tab) => {
    updateActiveTab(tab);
  };

  useEffect(() => {
    handleTabChange(options[0].category);
  }, []);

  return (
    <ul className={s.list}>
      {options.map((option) => (
        <li
          className={cx(s.item, {
            [s['item--active']]: activeTab === option.category,
          })}
          key={option.category}
          onClick={() => handleTabChange(option.category)}
        >
          {option.text}
        </li>
      ))}
    </ul>
  );
};

ListSection.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
