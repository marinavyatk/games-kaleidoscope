import s from './documentationSection.module.scss';
import { Button } from '../../components/button/button.tsx';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Doc from '../../assets/doc.png';
import { useRef } from 'react';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/zoom';
import { ProgressBar } from '../../components/progressBar/progressBar.tsx';
import { ViewCloserModal } from '../../layouts/modals/viewCloserModal/viewCloserModal.tsx';
import { handleSwiper } from '../../common/commonFunctions.ts';
import { NavButtons } from '../../components/navButtons/navButtons.tsx';

export const DocumentationSection = () => {
  const swiperRef = useRef<SwiperClass>(null);
  const docsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const docs = docsData.map((doc, index) => {
    const slideNumber = index + 1 < 10 ? `0${index + 1}` : index + 1;

    return (
      <SwiperSlide key={doc} virtualIndex={index}>
        <div className={s.docInfo}>
          <div>
            <div className={s.imgContainer}>
              <img src={Doc} alt='' />
            </div>
            <div className={s.navPanel}>
              <span>{slideNumber}</span>
              <ProgressBar currentSlide={index + 1} total={docsData.length} />

              <NavButtons swiperRef={swiperRef} />
            </div>
          </div>
          <div className={s.description}>
            <p>Акт проверки противопожарного состояния объекта</p>
            <ViewCloserModal imgSrc={Doc} trigger={<Button>Открыть</Button>} />
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section className={s.docSection}>
      <h2>документация</h2>
      <div className={s.background}>документация</div>
      <Swiper
        modules={[Keyboard, Navigation]}
        onSwiper={(swiper) => handleSwiper(swiper, swiperRef)}
        keyboard
        loop
      >
        {docs}
      </Swiper>
    </section>
  );
};
