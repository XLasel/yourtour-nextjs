import Image from 'next/image';
import PropTypes from 'prop-types';

import s from './ResponseCard.module.scss';

export const ResponseCard = ({ text, userName, selectedTour, userAvatar }) => {
  return (
    <div className={s.card}>
      <div className={s.text}>
        {text.map((p, id) => {
          return <p key={id}>{p}</p>;
        })}
      </div>
      <div className={s.user}>
        <div className={s['user-info']}>
          <h3>{userName}</h3>
          <p>Тур: {selectedTour} </p>
        </div>
        <Image
          className={s.avatar}
          src={userAvatar}
          alt="Автар автора"
          width={75}
          height={75}
        />
      </div>
    </div>
  );
};

ResponseCard.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  userName: PropTypes.string.isRequired,
  selectedTour: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};
