import s from './productCardModal.module.scss';
import { Modal } from '../modal.tsx';
import { ProductCard, ProductData } from '../../../sections/productCard/productCard.tsx';
import { Button } from '../../button/button.tsx';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';
import { handleSwiper } from '../../../common/commonFunctions.ts';
import { useRef } from 'react';

export type ProductCardsSliderProps = {
  productsData: ProductData[];
  activeSlide: number;
  setActiveIndex: (index: number) => void;
};
export const ProductCardModal = (props: ProductCardsSliderProps) => {
  const { productsData, activeSlide, setActiveIndex } = props;

  const swiperRef = useRef<SwiperClass>(null);

  const cards = productsData.map((product, index) => {
    return (
      <SwiperSlide key={product.productName}>
        <ProductCard
          productData={{ ...product }}
          onClose={() => setActiveIndex(index)}
          swiperRef={swiperRef}
        />
      </SwiperSlide>
    );
  });

  return (
    <Modal
      contentProps={{ className: s.modalContainer }}
      modalHeader={'Product card'}
      trigger={<Button>Смотреть</Button>}
    >
      <div className={s.productsSlider}>
        <Swiper
          modules={[Keyboard, Navigation]}
          onSwiper={(swiper) => {
            handleSwiper(swiper, swiperRef);
          }}
          keyboard
          loop
          initialSlide={activeSlide}
        >
          {cards}
        </Swiper>
      </div>
    </Modal>
  );
};
