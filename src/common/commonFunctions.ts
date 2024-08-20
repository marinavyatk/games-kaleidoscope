import { RefObject } from 'react';
import { SwiperClass } from 'swiper/react';

export const handlePrevButtonClick = (swiperRef: RefObject<SwiperClass>) => {
  swiperRef.current?.slidePrev();
};
export const handleNextButtonClick = (swiperRef: RefObject<SwiperClass>) => {
  swiperRef.current?.slideNext();
};
export const handleSwiper = (swiper: SwiperClass, swiperRef: RefObject<SwiperClass>) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  swiperRef.current = swiper;
};
