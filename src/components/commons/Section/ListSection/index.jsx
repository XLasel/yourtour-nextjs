'use client';

import { useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
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
    <ul className={s.root}>
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
  options: arrayOf(
    shape({
      category: string,
      text: string,
    }),
  ).isRequired,
};
