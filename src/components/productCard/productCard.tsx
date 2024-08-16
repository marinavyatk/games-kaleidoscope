import s from './productCard.module.scss';
import CloseIcon from '../../assets/close.svg?react';
import ArrowIcon from '../../assets/arrow-triangle.svg?react';
import Model from '../../assets/product.png';
import { useMediaQuery } from 'react-responsive';

export const ProductCard = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <div className={s.productCard}>
      <div className={s.background}></div>
      <div>
        <div className={s.cardHeader}>
          <h2>МАФ «КОРОБКА № 2»</h2>
          <CloseIcon className={s.close} />
        </div>

        <div className={s.cardMain}>
          <div className={s.description}>
            <h3>описание товара</h3>
            <p>
              Малая архитектурная форма «КОРОБКА № 2» с функцией развлекательно-игрового комплекса
              представляет концепцию самого популярного вида спорта — футбола.
              <br />
              <br />
              Мини-формат этой игры делает её доступной даже для минимального количества игроков,
              позволяя наслаждаться футболом в ограниченном пространстве.
            </p>
          </div>
          {!isTabletOrMobile && (
            <div className={s.specifications}>
              <h3>характеристики</h3>
              <div className={s.table}>
                <div>
                  <span>Длина</span>
                  <span>2760мм</span>
                </div>
                <div>
                  <span>ширина</span>
                  <span>1800мм</span>
                </div>
                <div>
                  <span>Высота</span>
                  <span>925мм</span>
                </div>
                <div>
                  <span>Цвет</span>
                  <span className={s.color}>индивидуальный</span>
                </div>
              </div>

              <a href='#' download rel='nofollow'>
                получить кп
              </a>
            </div>
          )}
        </div>

        <div className={s.model}>
          <img src={Model} alt='' />
        </div>

        {isTabletOrMobile && (
          <div className={s.cardMain}>
            <div className={s.specifications}>
              <h3>характеристики</h3>
              <div className={s.table}>
                <div>
                  <span>Длина</span>
                  <span>2760мм</span>
                </div>
                <div>
                  <span>ширина</span>
                  <span>1800мм</span>
                </div>
                <div>
                  <span>Высота</span>
                  <span>925мм</span>
                </div>
                <div>
                  <span>Цвет</span>
                  <span className={s.color}>индивидуальный</span>
                </div>
              </div>

              <a href='#' download rel='nofollow'>
                получить кп
              </a>
            </div>
          </div>
        )}
      </div>
      <div className={s.cardFooter}>
        <a href='#' download rel='nofollow'>
          получить кп
        </a>
        <div className={s.navButtons}>
          <button>
            <ArrowIcon />
            Назад
          </button>
          <button className={s.next}>
            Вперед <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
