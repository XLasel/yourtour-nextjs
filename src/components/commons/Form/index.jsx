'use client';

import { useForm, FormProvider } from 'react-hook-form';
import cx from 'classnames';

import { ErrorMessage } from './layout/ErrorMessage';
import { FieldLayout } from './layout/FieldLayout';
import { Select } from './Select';
import { DataPicker } from './DataPicker';
import { Button } from './Button';

import s from './Form.module.scss';

export const Form = () => {
  const methods = useForm({
    mode: 'onBlur',
  });

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    reset,
  } = methods;

  const onSubmit = (data) => {
    if (data.adult === 'no') {
      setError('adult', {
        type: 'manual',
        message: 'Вы должны быть старше 18 лет для продолжения',
      });
    } else {
      alert(JSON.stringify(data));
      reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={s.root}>
        <div className={s.wrapper}>
          <FieldLayout className={s.field} label="Имя" id="name">
            <input
              id="name"
              type="text"
              {...register('name', {
                required: 'Имя обязательно',
              })}
              placeholder="Введите Ваше имя"
              aria-invalid={errors.name ? 'true' : 'false'}
              className={s.input}
            />
          </FieldLayout>
          <Select className={s.field} />
          <FieldLayout className={s.field} label="Email" id="email">
            <input
              className={s.input}
              type="email"
              id="email"
              placeholder="example@mail.com"
              {...register('email', {
                required: 'Пожалуйста, введите email',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Некорретный email-формат',
                },
              })}
            />
          </FieldLayout>
          <FieldLayout className={s.field} label="Телефон" id="phone">
            <input
              className={s.input}
              type="tel"
              id="phone"
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
              {...register('phone', {
                required: 'Пожалуйста, введите номер телефона',
                pattern: {
                  value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                  message: 'Некорректный номер телефона',
                },
              })}
            />
          </FieldLayout>
          <DataPicker className={s.field} />
          <FieldLayout className={s.field} label="Комментарий" id="comment">
            <textarea
              className={s.textarea}
              name="comment"
              id="comment"
              rows="5"
              autoComplete="off"
            />
          </FieldLayout>
          <div
            className={cx(s.field, {
              [s.invalid]: errors.adult,
            })}
          >
            <fieldset className={s.fieldset}>
              <legend>Вам есть 18 лет?</legend>
              <div className={s['radio-flex']}>
                <label className={s['radio-label']}>
                  <input
                    {...register('adult', {
                      required: true,
                    })}
                    type="radio"
                    value="yes"
                    className={s['radio-input']}
                  />
                  <span className={s['radio-custom']} />
                  <span>Да</span>
                </label>
                <label className={s['radio-label']}>
                  <input
                    {...register('adult', {
                      required: true,
                    })}
                    type="radio"
                    name="adult"
                    value="no"
                    className={s['radio-input']}
                  />
                  <span className={s['radio-custom']} />
                  <span>Нет</span>
                </label>
              </div>
            </fieldset>
            <ErrorMessage id="adult" />
          </div>
          <div className={s.fieldset}>
            <label className={s['checkbox-label']}>
              <input
                className={s['checkbox-input']}
                type="checkbox"
                required
                {...register('agrement', {
                  required: true,
                })}
              />
              <span className={s['checkbox-custom']} />
              <span>
                Нажимая кнопку, я принимаю условия{' '}
                <a href="#!">Лицензионного договора</a>
              </span>
            </label>
          </div>
          <div className={s.field}>
            <div className={s.buttons}>
              <Button
                label="Найти тур"
                type="submit"
                isPrimary
                onClick={handleSubmit(onSubmit)}
              />
              <Button label="Сбросить" type="reset" onClick={() => reset()} />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
