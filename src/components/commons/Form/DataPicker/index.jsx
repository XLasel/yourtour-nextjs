'use client';

import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ItemFormLayout } from '../layout/ItemFormLayout';

import s from './DataPicker.module.scss';

export const DataPicker = ({ className }) => {
  const { getValues, trigger, register } = useFormContext();

  const getStateDate = () => {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().slice(0, 10);

    const startDate = getValues('startDate');
    const endDate = getValues('endDate');

    return {
      formattedCurrentDate,
      startDate,
      endDate,
    };
  };

  const validateStartDate = () => {
    const { formattedCurrentDate, startDate, endDate } = getStateDate();

    if (!startDate) return true;

    if (startDate < formattedCurrentDate) {
      return 'Дата начала тура не может быть меньше текущей даты';
    }

    if (!endDate) return true;

    if (startDate > endDate) {
      return 'Дата начала не может быть больше даты окончания';
    }

    return true;
  };

  const validateEndDate = () => {
    const { startDate, endDate } = getStateDate();

    if (!endDate || !startDate) return true;

    if (endDate < startDate) {
      return 'Дата окончания не может быть меньше даты начала';
    }

    return true;
  };

  return (
    <>
      <ItemFormLayout className={className} label="Дата от" id="startDate">
        <input
          id="startDate"
          type="date"
          {...register('startDate', { validate: validateStartDate })}
          className={cx(s.date, {
            [s.placeholder]: !getValues('startDate'),
          })}
          onBlur={() => trigger(['startDate', 'endDate'])}
        />
      </ItemFormLayout>

      <ItemFormLayout className={className} label="Дата до" id="endDate">
        <input
          id="endDate"
          type="date"
          {...register('endDate', { validate: validateEndDate })}
          className={cx(s.date, {
            [s.placeholder]: !getValues('endDate'),
          })}
          onBlur={() => trigger(['startDate', 'endDate'])}
        />
      </ItemFormLayout>
    </>
  );
};

DataPicker.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
