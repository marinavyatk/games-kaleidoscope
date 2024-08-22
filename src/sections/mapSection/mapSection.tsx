import s from './mapSection.module.scss';
import Background from '../../assets/map-bg.png';

export const MapSection = () => {
  return (
    <section className={s.mapSection}>
      <div className={s.background}>
        <img src={Background} alt='' />
      </div>
      <h2>
        места
        <br /> размещения
      </h2>
    </section>
  );
};
