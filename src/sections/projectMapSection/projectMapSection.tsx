import s from './projectMapSection.module.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import StepPhoto from '../../assets/step-photo.png';
import Arrow from '../../assets/arrow-up.svg?react';
import { useRef } from 'react';
import {
  handleNextButtonClick,
  handlePrevButtonClick,
  handleSwiper,
} from '../../common/commonFunctions.ts';
import { Keyboard, Navigation } from 'swiper/modules';
import { ViewCloserModal } from '../../layouts/modals/viewCloserModal/viewCloserModal.tsx';
import { stepsData, Timeline } from '../../components/timeline/timeline.tsx';

const photos = [StepPhoto, StepPhoto, StepPhoto, StepPhoto, StepPhoto];

export const ProjectMapSection = () => {
  const swiperRef = useRef<SwiperClass>(null);
  const stepPhotos = photos.map((photo, index) => {
    return (
      <SwiperSlide key={`photo-${index}`}>
        <ViewCloserModal
          imgSrc={photo}
          trigger={<img src={photo} alt='' className={s.stepPhoto} />}
        />
      </SwiperSlide>
    );
  });

  return (
    <section className={s.projectMapSection} id='realized'>
      <h2>карта проекта</h2>
      <div className={s.background}>
        идея <br />
        и&nbsp;миссия
      </div>
      <h3>2024 г.</h3>
      <p className={s.description}>
        Реализована первая малая архитектурная форма КОРОБКА № с функцией развлекательно-игрового
        комплекса.
      </p>
      <Swiper
        modules={[Keyboard, Navigation]}
        slidesPerView={4}
        onSwiper={(swiper) => {
          handleSwiper(swiper, swiperRef);
        }}
        keyboard
        loop
      >
        {stepPhotos}
      </Swiper>
      <div className={s.navButtons}>
        <button className={s.btnPrev} onClick={() => handlePrevButtonClick(swiperRef)}>
          <Arrow />
        </button>
        <button className={s.btnNext} onClick={() => handleNextButtonClick(swiperRef)}>
          <Arrow />
        </button>
      </div>
      <Timeline stepsData={stepsData} />
    </section>
  );
};
