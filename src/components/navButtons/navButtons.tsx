import s from './navButtons.module.scss';
import { handleNextButtonClick, handlePrevButtonClick } from '../../common/commonFunctions.ts';
import { ComponentPropsWithoutRef, RefObject } from 'react';
import { SwiperClass } from 'swiper/react';
import { clsx } from 'clsx';
import Arrow from '../../assets/arrow-up.svg?react';

export type NavButtonsProps = {
  swiperRef: RefObject<SwiperClass>;
} & ComponentPropsWithoutRef<'div'>;

export const NavButtons = (props: NavButtonsProps) => {
  const { swiperRef, className, ...restProps } = props;
  const classNames = clsx(s.navButtons, className);
  return (
    <div className={classNames} {...restProps}>
      <button className={s.btnPrev} onClick={() => handlePrevButtonClick(swiperRef)}>
        <Arrow />
      </button>
      <button className={s.btnNext} onClick={() => handleNextButtonClick(swiperRef)}>
        <Arrow />
      </button>
    </div>
  );
};
