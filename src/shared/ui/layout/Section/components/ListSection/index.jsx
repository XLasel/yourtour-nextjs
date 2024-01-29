'use client';

import { useEffect } from 'react';
import classNames from 'classnames';

import { useTabContext } from '@/shared/context/TabContext';

import styles from './ListSection.module.scss';

export const ListSection = ({ options }) => {
  const { activeTab, updateActiveTab } = useTabContext();

  const handleTabChange = (tab) => {
    updateActiveTab(tab);
  };

  useEffect(() => {
    handleTabChange(options[0].category);
  }, []);

  return (
    <ul className={styles.list}>
      {options.map((option) => (
        <li
          className={classNames(styles.item, {
            [styles['item--active']]: activeTab === option.category,
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
