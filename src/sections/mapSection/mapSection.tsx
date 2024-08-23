import s from './mapSection.module.scss';
import Background from '../../assets/map-bg.png';
import Map from '../../components/map/map.tsx';

export const MapSection = () => {
  return (
    <section className={s.mapSection} id='realized'>
      <div className={s.background}>
        <img src={Background} alt='' />
      </div>
      <h2>
        места
        <br /> размещения
      </h2>
      <Map />
    </section>
  );
};
