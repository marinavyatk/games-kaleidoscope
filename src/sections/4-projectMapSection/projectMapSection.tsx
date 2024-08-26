import s from './projectMapSection.module.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import StepPhoto from '../../assets/step-photo.png';
import { useRef } from 'react';
import { handleSwiper } from '../../common/commonFunctions.ts';
import { Keyboard, Navigation } from 'swiper/modules';
import { ViewCloserModal } from '../../components/modal/viewCloserModal/viewCloserModal.tsx';
import { stepsData, Timeline } from '../../components/timeline/timeline.tsx';
import 'swiper/scss';
import { NavButtons } from '../../components/navButtons/navButtons.tsx';
import { useMediaQuery } from 'react-responsive';

const photos = [StepPhoto, StepPhoto, StepPhoto, StepPhoto, StepPhoto];

export const ProjectMapSection = () => {
  const swiperRef = useRef<SwiperClass>(null);
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const stepPhotos = photos.map((photo, index) => {
    return (
      <SwiperSlide key={`photo-${index}`} className={s.slide}>
        <ViewCloserModal
          imgSrc={photo}
          trigger={<img src={photo} alt='' className={s.stepPhoto} />}
        />
      </SwiperSlide>
    );
  });

  return (
    <section className={s.projectMapSection} id='history'>
      <h2>карта проекта</h2>
      <div className={s.background}>
        идея <br />
        и&nbsp;миссия
      </div>
      <h3>2024 г.</h3>
      <div className={s.description}>
        <p>
          Реализована первая малая архитектурная форма КОРОБКА № с функцией развлекательно-игрового
          комплекса.
        </p>
        {isTablet && <NavButtons swiperRef={swiperRef} className={s.navButtons} />}
      </div>

      <Swiper
        modules={[Keyboard, Navigation]}
        slidesPerView={'auto'}
        spaceBetween={22}
        onSwiper={(swiper) => {
          handleSwiper(swiper, swiperRef);
        }}
        keyboard
        loop
        className={s.slidesContainer}
      >
        {stepPhotos}
      </Swiper>
      {!isTablet && <NavButtons swiperRef={swiperRef} className={s.navButtons} />}
      <Timeline stepsData={stepsData} />
    </section>
  );
};
