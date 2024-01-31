'use client';

import { useForm, FormProvider } from 'react-hook-form';
import classNames from 'classnames';

import { Section } from '@/shared/ui/layout/Section';
import { ItemFormLayout } from './layout/ItemFormLayout';
import { Select } from './components/Select';
import { DataPicker } from './components/DataPicker';
import { ErrorMessage } from './components/ErrorMessage';
import { Button } from './components/Button';

import { constructorInfo } from '../config';
import styles from './ConstructorSection.module.scss';

export const ConstructorSection = () => {
  const { title, subtitle } = constructorInfo;

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
      <Section
        title={title}
        subtitle={subtitle}
        customClassForTop={styles.top}
        id="constructor"
      >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.flex}>
            <ItemFormLayout
              styleParentField={styles.field}
              label="Имя"
              id="name"
            >
              <input
                id="name"
                type="text"
                {...register('name', {
                  required: 'Имя обязательно',
                })}
                placeholder="Введите Ваше имя"
                aria-invalid={errors.name ? 'true' : 'false'}
                className={styles.input}
              />
            </ItemFormLayout>
            <Select styleParentField={styles.field} />
            <ItemFormLayout
              styleParentField={styles.field}
              label="Email"
              id="email"
            >
              <input
                className={styles.input}
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
            </ItemFormLayout>
            <ItemFormLayout
              styleParentField={styles.field}
              label="Телефон"
              id="phone"
            >
              <input
                className={styles.input}
                type="tel"
                id="phone"
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                {...register('phone', {
                  required: 'Пожалуйста, введите номер телефона',
                  pattern: {
                    value:
                      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    message: 'Некорректный номер телефона',
                  },
                })}
              />
            </ItemFormLayout>
            <DataPicker styleParentField={styles.field} />
            <ItemFormLayout
              styleParentField={styles.field}
              label="Комментарий"
              id="comment"
            >
              <textarea
                className={styles.textarea}
                name="comment"
                id="comment"
                rows="5"
                autoComplete="off"
              />
            </ItemFormLayout>
            <div
              className={classNames(styles.field, {
                [styles.invalid]: errors.adult,
              })}
            >
              <fieldset className={styles.fieldset}>
                <legend>Вам есть 18 лет?</legend>
                <div className={styles['radio-flex']}>
                  <label className={styles['radio-label']}>
                    <input
                      {...register('adult', {
                        required: true,
                      })}
                      type="radio"
                      value="yes"
                      className={styles['radio-input']}
                    />
                    <span className={styles['radio-custom']} />
                    <span>Да</span>
                  </label>
                  <label className={styles['radio-label']}>
                    <input
                      {...register('adult', {
                        required: true,
                      })}
                      type="radio"
                      name="adult"
                      value="no"
                      className={styles['radio-input']}
                    />
                    <span className={styles['radio-custom']} />
                    <span>Нет</span>
                  </label>
                </div>
              </fieldset>
              <ErrorMessage id="adult" />
            </div>
            <div className={styles.fieldset}>
              <label className={styles['checkbox-label']}>
                <input
                  className={styles['checkbox-input']}
                  type="checkbox"
                  required
                  {...register('agrement', {
                    required: true,
                  })}
                />
                <span className={styles['checkbox-custom']} />
                <span>
                  Нажимая кнопку, я принимаю условия{' '}
                  <a href="#!">Лицензионного договора</a>
                </span>
              </label>
            </div>
            <div className={styles.field}>
              <div className={styles.buttons}>
                <Button label="Найти тур" type="submit" />
                <Button label="Сбросить" type="reset" />
              </div>
            </div>
          </div>
        </form>
      </Section>
    </FormProvider>
  );
};
