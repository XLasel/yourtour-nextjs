import Button from "../Button/Button";
import Section from "../Section/Section";
import styles from "./ConstructorSection.module.scss";

const ConstructorSection = () => {
  const title = "Собери свой тур";
  const subtitle =
    "Идейные соображения высшего порядка, а также рамки и место обучения кадров";

  return (
    <Section title={title} subtitle={subtitle}>
      <form className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles["field__label"]}>
              Имя
            </label>
            <input
              className={styles["field__input"]}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите Ваше имя"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="select__type" className={styles["field__label"]}>
              Направление
            </label>
            <div className={styles["custom-arrow"]}>
              <select
                className={`${styles["field__select"]} ${styles["field__select-placeholder"]}`}
                id="select__type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="none" hidden="">
                  Куда хотите ехать
                </option>
                <option value="Поход">Поход</option>
                <option value="Сплав">Сплав</option>
                <option value="Велопрогулка">Велопрогулка</option>
              </select>
            </div>
          </div>

          <div className="constructor__form-field">
            <label htmlFor="email" className="constructor__form-label">
              Email
            </label>
            <input
              className="constructor__form-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
            />
          </div>

          <div className="constructor__form-field">
            <label htmlFor="phone" className="constructor__form-label">
              Телефон
            </label>
            <input
              className="constructor__form-input"
              type="tel"
              id="phone"
              name="phone"
              maxLength="50"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="constructor__form-field">
            <label htmlFor="date-from" className="constructor__form-label">
              Дата от
            </label>
            <input
              className="constructor__form-date constructor__form-input--date-placeholder"
              type="date"
              id="date-from"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
            />
          </div>

          <div className="constructor__form-field">
            <label htmlFor="date-to" className="constructor__form-label">
              Дата до
            </label>
            <input
              className="constructor__form-date constructor__form-input--date-placeholder"
              type="date"
              id="date-to"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleChange}
            />
          </div>

          <div className="constructor__form-field">
            <label htmlFor="comment" className="constructor__form-label">
              Комментарий
            </label>
            <textarea
              className="constructor__form-textarea"
              style={{ resize: "none" }}
              name="comment"
              id="comment"
              rows="5"
              autoComplete="off"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="constructor__form-field">
            <fieldset className="constructor__form-fieldset">
              <legend>Вам есть 18 лет?</legend>
              <div className="constructor__form-radio-flex">
                <label className="constructor__form-radio-label">
                  <input
                    type="radio"
                    name="answer"
                    value="yes"
                    className="constructor__form-radio-input"
                    checked={formData.answer === "yes"}
                    onChange={handleChange}
                  />
                  <span className="constructor__form-radio-custom"></span>
                  Да
                </label>
                <label className="constructor__form-radio-label">
                  <input
                    type="radio"
                    name="answer"
                    value="no"
                    className="constructor__form-radio-input"
                    checked={formData.answer === "no"}
                    onChange={handleChange}
                  />
                  <span className="constructor__form-radio-custom"></span>
                  Нет
                </label>
              </div>
            </fieldset>
          </div>

          <div className="constructor__form-field">
            <label className="constructor__form-checkbox-lebel">
              <input
                type="checkbox"
                className="constructor__form-checkbox-input"
                required
                checked={formData.agreement}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    agreement: e.target.checked,
                  }))
                }
              />
              <span className="constructor__form-checkbox-custom"></span>
              <span>
                Нажимая кнопку, я принимаю условия{" "}
                <a href="#!">Лицензионного договора</a>
              </span>
            </label>
          </div>
          <div className="constructor__form-field">
            <label htmlFor="email" className="constructor__form-label">
              Email
            </label>
            <input
              className="constructor__form-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
            />
          </div>

          <div className="constructor__form-field">
            <label htmlFor="phone" className="constructor__form-label">
              Телефон
            </label>
            <input
              className="constructor__form-input"
              type="tel"
              id="phone"
              name="phone"
              maxLength="50"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="constructor__form-field">
            <label htmlFor="date-from" className="constructor__form-label">
              Дата от
            </label>
            <input
              className="constructor__form-date constructor__form-input--date-placeholder"
              type="date"
              id="date-from"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
            />
          </div>

          <div className="constructor__form-field">
            <label htmlFor="date-to" className="constructor__form-label">
              Дата до
            </label>
            <input
              className="constructor__form-date constructor__form-input--date-placeholder"
              type="date"
              id="date-to"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleChange}
            />
          </div>

          <div className="constructor__form-field">
            <label htmlFor="comment" className="constructor__form-label">
              Комментарий
            </label>
            <textarea
              className="constructor__form-textarea"
              style={{ resize: "none" }}
              name="comment"
              id="comment"
              rows="5"
              autoComplete="off"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="constructor__form-field">
            <fieldset className="constructor__form-fieldset">
              <legend>Вам есть 18 лет?</legend>
              <div className="constructor__form-radio-flex">
                <label className="constructor__form-radio-label">
                  <input
                    type="radio"
                    name="answer"
                    value="yes"
                    className="constructor__form-radio-input"
                    checked={formData.answer === "yes"}
                    onChange={handleChange}
                  />
                  <span className="constructor__form-radio-custom"></span>
                  Да
                </label>
                <label className="constructor__form-radio-label">
                  <input
                    type="radio"
                    name="answer"
                    value="no"
                    className="constructor__form-radio-input"
                    checked={formData.answer === "no"}
                    onChange={handleChange}
                  />
                  <span className="constructor__form-radio-custom"></span>
                  Нет
                </label>
              </div>
            </fieldset>
          </div>

          <div className="constructor__form-field">
            <label className="constructor__form-checkbox-lebel">
              <input
                type="checkbox"
                className="constructor__form-checkbox-input"
                required
                checked={formData.agreement}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    agreement: e.target.checked,
                  }))
                }
              />
              <span className="constructor__form-checkbox-custom"></span>
              <span>
                Нажимая кнопку, я принимаю условия{" "}
                <a href="#!">Лицензионного договора</a>
              </span>
            </label>
          </div>

          <div className={styles.field}>
            <div className={styles.buttons}>
              <Button type="submit" />
              <Button type="reset" />
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default ConstructorSection;
