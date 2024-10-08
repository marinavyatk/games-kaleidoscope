import { useState } from 'react';
import { Card, CardData } from '../card/card.tsx';
import s from './carousel.module.scss';
import { ProgressBar } from '../progressBar/progressBar.tsx';
import Arrow from '../../assets/arrow-up.svg?react';

export type CarouselProps = {
  items: CardData[];
};

export const Carousel = (props: CarouselProps) => {
  const { items } = props;
  const [activeIndex, setActiveIndex] = useState(items.length < 3 ? 0 : 1);

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const getStatus = (index: number) => {
    if (index === activeIndex) return 'activeCard';
    if (index === (activeIndex + 1) % items.length) return 'nextCard';
    if (index === (activeIndex - 1 + items.length) % items.length) return 'prevCard';
    return 'hiddenCard';
  };

  const generateItems = () => {
    const itemComponents = [];
    for (let i = activeIndex - 1; i <= activeIndex + 1; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      itemComponents.push(
        <Card
          key={index}
          cardData={{ ...items[index] }}
          status={getStatus(index)}
          activeSlide={activeIndex}
          setActiveIndex={setActiveIndex}
        />,
      );
    }
    return itemComponents;
  };

  return (
    <div className={s.carousel}>
      <div className={s.itemsContainer}>{generateItems()}</div>
      <div className={s.navPanel}>
        <button className={s.btnPrev} onClick={prevItem}>
          <Arrow />
        </button>
        <ProgressBar currentSlide={activeIndex + 1} total={items.length} />
        <button className={s.btnNext} onClick={nextItem}>
          <Arrow />
        </button>
      </div>
    </div>
  );
};
