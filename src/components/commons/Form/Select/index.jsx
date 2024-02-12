'use client';

import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ItemFormLayout } from '../layout/ItemFormLayout';

import s from './Select.module.scss';

export const Select = ({ className }) => {
  const { register, watch } = useFormContext();

  const options = [
    { value: 'campaign', label: 'Поход' },
    { value: 'rafting', label: 'Сплав' },
    { value: 'cyclingTrip', label: 'Велопрогулка' },
  ];

  const selectTour = watch('selectTour');

  return (
    <ItemFormLayout
      className={cx(s['custom-arrow'], className)}
      label="Направление"
      id="selectTour"
    >
      <select
        id="selectTour"
        {...register('selectTour', { required: 'Тур обязателен' })}
        className={cx(s.select, {
          [s.placeholder]: !selectTour,
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

Select.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
