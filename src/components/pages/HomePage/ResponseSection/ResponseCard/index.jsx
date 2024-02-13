import Image from 'next/image';
import { arrayOf, string } from 'prop-types';

import s from './ResponseCard.module.scss';

export const ResponseCard = ({ text, userName, selectedTour, userAvatar }) => {
  return (
    <div className={s.root}>
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
  text: arrayOf(string).isRequired,
  userName: string.isRequired,
  selectedTour: string.isRequired,
  userAvatar: string,
};
