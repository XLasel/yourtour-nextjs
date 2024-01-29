'use client';

import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import { ItemFormLayout } from '../../layout/ItemFormLayout';

import styles from './Select.module.scss';

export const Select = ({ styleParentField }) => {
  const { register, watch } = useFormContext();

  const options = [
    { value: 'campaign', label: 'Поход' },
    { value: 'rafting', label: 'Сплав' },
    { value: 'cyclingTrip', label: 'Велопрогулка' },
  ];

  const selectTour = watch('selectTour');

  return (
    <ItemFormLayout
      styleParentField={`${styleParentField} ${styles['custom-arrow']}`}
      label="Направление"
      id="selectTour"
    >
      <select
        id="selectTour"
        {...register('selectTour', { required: 'Тур обязателен' })}
        className={classNames(styles.select, {
          [styles.placeholder]: !selectTour,
        })}
      >
        <option value="" hidden>
          Куда хотите ехать
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </ItemFormLayout>
  );
};
