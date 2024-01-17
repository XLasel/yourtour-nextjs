"use client";

import { useState, useRef, useEffect } from "react";
import Button from "../forms/Button/Button";
import Section from "../Section/Section";
import classNames from "classnames";
import styles from "./ConstructorSection.module.scss";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const ConstructorSection = () => {
  const title = "Собери свой тур";
  const subtitle =
    "Идейные соображения высшего порядка, а также рамки и место обучения кадров";

  const options = [
    { value: "campaign", label: "Поход" },
    { value: "rafting", label: "Сплав" },
    { value: "cyclingTrip", label: "Велопрогулка" },
  ];

  const getValue = (value) =>
    value ? options.find((option) => option.value === value) : "";

  const {
    register,
    formState: { errors, isValid, isDirty },
    setValue,
    setFocus,
    getValues,
    handleSubmit,
    reset,
    control,
    watch,
    clearErrors,
    trigger,
  } = useForm({
    mode: "onBlur",
  });

  const selectedTour = watch("selectTour");

  const validateStartDate = (value) => {
    const currentDate = new Date();
    // const selectedDate = new Date(value);

    const startDateValue = getValues("startDate");
    const startDate = new Date(startDateValue);

    if (startDate < currentDate) {
      return "Дата начала тура не может быть меньше текущей даты";
    }

    const endDateValue = getValues("endDate");
    const endDate = new Date(endDateValue);
    if (startDate > endDate) {
      return "Дата начала не может быть больше даты окончания";
    }

    return true;
  };

  const validateEndDate = (value) => {
    const currentDate = new Date();
    // const selectedDate = new Date(value);

    const endDateValue = getValues("endDate");
    const endDate = new Date(endDateValue);

    if (endDate < currentDate.setDate(currentDate.getDate() + 2)) {
      return "Дата окончания не может быть меньше послезавтрашней даты";
    }

    const startDateValue = getValues("startDate");
    const startDate = new Date(startDateValue);
    if (endDate < startDate) {
      return "Дата окончания не может быть меньше даты начала";
    }

    return true;
  };

  // const startDateValue = watch("startDate", ""); // Значение по умолчанию ""
  // const endDateValue = watch("endDate", "");

  // const validateDate = () => {
  //   const currentDate = new Date();
  //   const isoDateString = currentDate.toISOString().split('T')[0]
  //   const startDateValue = getValues("startDate");
  //   const endDateValue = getValues("endDate");

  //   if (!!startDateValue) {

  //   }

  // }

  const onSubmit = (data) => {
    if (data.adult === "no") {
      setError("adult", {
        type: "manual",
        message: "Вы должны быть старше 18 лет для продолжения.",
      });
    } else {
      alert(JSON.stringify(data));
      reset();
    }
  };

  return (
    <Section title={title} subtitle={subtitle}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.flex}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Имя
            </label>
            <input
              id="name"
              type="text"
              {...register("name", {
                required: "Имя обязательно",
                maxLength: {
                  value: 30,
                  message: "Превышение максимальной длины",
                },
              })}
              placeholder="Введите Ваше имя"
              aria-invalid={errors.name ? "true" : "false"}
              className={classNames(styles.input, {
                [styles.invalid]: !!errors.name,
              })}
            />
            {errors.name && (
              <div
                className={styles["error-tooltip"]}
                onClick={() => setFocus("name")}
              >
                {errors.name?.message}
              </div>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="selectTour" className={styles.label}>
              Направление
            </label>
            {/* <Controller
              control={control}
              name="selectTour"
              rules={{ required: "Тур обязателен" }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Select
                  className={styles.select}
                  id="selectTour"
                  placeholder="Куда хотите ехать"
                  options={options}
                  onChange={(newValue) => onChange(newValue.value)}
                />
              )}
            /> */}
            <select
              id="selectTour"
              {...register("selectTour", { required: "Тур обязателен" })}
              className={classNames(styles.select, {
                [styles.placeholder]: !selectedTour,
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
            {errors.selectTour && (
              <div
                className={styles["error-tooltip"]}
                onClick={() => setFocus("selectTour")}
              >
                {errors.selectTour?.message}
              </div>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="example@mail.com"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Некорретный email-формат",
                },
              })}
            />
            {errors.email && (
              <div
                className={styles["error-tooltip"]}
                onClick={() => setFocus("email")}
              >
                {errors.email?.message}
              </div>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="phone" className={styles.label}>
              Телефон
            </label>
            <input
              className={styles.input}
              type="tel"
              id="phone"
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
              {...register("phone", {
                required: true,
                maxLength: 50,
                pattern: {
                  value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                  message: "Некорректный номер телефона",
                },
              })}
            />
            {errors.phone && (
              <div
                className={styles["error-tooltip"]}
                onClick={() => setFocus("phone")}
              >
                {errors.phone?.message}
              </div>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="startDate" className={styles.label}>
              Дата от
            </label>
            <Controller
              name="startDate"
              control={control}
              rules={{ validate: validateStartDate }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  placeholder="ДД.ММ.ГГГГ"
                  className={classNames(styles.date, {
                    [styles.placeholder]: !field.value,
                  })}
                  onBlur={() => trigger(["startDate", "endDate"])}
                />
              )}
            />
            {errors.startDate && (
              <div
                className={styles["error-tooltip"]}
                onClick={() => setFocus("startDate")}
              >
                {errors.startDate?.message}
              </div>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="endDate" className={styles.label}>
              Дата до
            </label>
            <Controller
              name="endDate"
              control={control}
              rules={{ validate: validateEndDate }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  placeholder="ДД.ММ.ГГГГ"
                  className={classNames(styles.date, {
                    [styles.placeholder]: !field.value,
                  })}
                  onBlur={() => trigger(["startDate", "endDate"])}
                />
              )}
            />
            {errors.endDate && (
              <div
                className={styles["error-tooltip"]}
                onClick={() => setFocus("endDate")}
              >
                {errors.endDate?.message}
              </div>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="comment" className={styles.label}>
              Комментарий
            </label>
            <textarea
              className={styles.textarea}
              name="comment"
              id="comment"
              rows="5"
              autoComplete="off"
            />
          </div>
          <div className={styles.field}>
            <fieldset className={styles.fieldset}>
              <legend>Вам есть 18 лет?</legend>
              <div className={styles["radio-flex"]}>
                <label className={styles["radio-label"]}>
                  <input
                    {...register("adult", {
                      required: true,
                    })}
                    type="radio"
                    value="yes"
                    className={styles["radio-input"]}
                  />
                  <span className={styles["radio-custom"]} />
                  <span>Да</span>
                </label>
                <label className={styles["radio-label"]}>
                  <input
                    {...register("adult", {
                      required: true,
                    })}
                    type="radio"
                    name="adult"
                    value="no"
                    className={styles["radio-input"]}
                  />
                  <span className={styles["radio-custom"]} />
                  <span>Нет</span>
                </label>
              </div>
            </fieldset>
            {errors.adult && (
              <div className={styles["error-tooltip"]}>
                {errors.adult?.message}
              </div>
            )}
          </div>
          <div className={styles.fieldset}>
            <label className={styles["checkbox-label"]}>
              <input
                className={styles["checkbox-input"]}
                type="checkbox"
                required
                {...register("agrement", {
                  required: true,
                })}
              />
              <span className={styles["checkbox-custom"]} />
              <span>
                Нажимая кнопку, я принимаю условия{" "}
                <a href="#!">Лицензионного договора</a>
              </span>
            </label>
          </div>
          <div className={styles.field}>
            <div className={styles.buttons}>
              <Button
                label="Найти тур"
                style="primary"
                type="submit"
                disabled={!isValid}
              />
              {/* <Button
                label="Посмотреть даннные"
                type="button"
                onClick={() => {
                  console.log(getValues());
                  // reset();
                }}
              /> */}
              <Button
                label="Сбросить"
                type="button"
                onClick={() => {
                  console.log(getValues());
                  reset();
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default ConstructorSection;
