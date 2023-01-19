import styles from './Card.module.scss';

import classNames from 'classnames';
type CardType = {
  title: string;
  categoria: string;
  portion: string;
  gift: string;
  images: string;
  weight: string;
  disabled: boolean;
  isCompleted: boolean;
  id: number;
  desc: string;
  satisfied: boolean;
  onSelectCard: (id: number) => void;
};

const Card: React.FC<CardType> = ({
  title,
  categoria,
  portion,
  gift,
  images,
  weight,
  desc,
  isCompleted,
  satisfied,
  onSelectCard,
  disabled,
  id,
}) => {
  return (
    <div
      className={classNames(styles.Card, {
        [styles.selected]: isCompleted,
        [styles.disabled]: disabled,
      })}
      onClick={() => onSelectCard(id)}
    >
      <div className={styles.wrapper}>
        <div className={classNames(styles.CardInner)}>
          <div className={styles.CardInfo}>
            <p className={styles.CardSubTitle}>Сказочное заморское яство</p>
            <h2 className={styles.Title}>{title}</h2>
            <h4 className={styles.categoria}>{categoria}</h4>
            <div className={styles.desc}>
              <p>
                <b>{portion} </b> порций
              </p>
              <p>
                {gift === '' ? (
                  'мышь в подарок'
                ) : +gift < 4 ? (
                  <>
                    <b>{gift}</b> мыши в подарок
                  </>
                ) : (
                  <>
                    <b>{gift}</b> мышей в подарок
                  </>
                )}
              </p>
              {satisfied && (
                <p className={styles.satisfied}>заказчик доволен</p>
              )}
            </div>
          </div>
          <img className={styles.img} src={images} />
          <div className={styles.weight}>
            {weight} <span>кг</span>
          </div>
        </div>
      </div>
      <p className={styles.text}>
        {!isCompleted ? (
          <>
            Чего сидишь? Порадуй котэ,
            <span className={styles.span} onClick={() => onSelectCard(id)}>
              купи.
            </span>
          </>
        ) : (
          <>{desc}</>
        )}
      </p>
    </div>
  );
};

export default Card;
