import { Button } from '../../components/button/button.tsx';
import s from './mainSection.module.scss';
import Background from '../../assets/main-section-bg.png';
import Kids from '../../assets/kids.png';

export const MainSection = () => {
  return (
    <section className={s.mainSection}>
      <div className={s.background}>
        <img src={Background} alt='' />
      </div>
      <div className={s.kids}>
        <img src={Kids} alt='' />
      </div>
      <h1>
        Калейдоскоп ИГР
        <br />
        <span> конструкторское бюро</span>
      </h1>
      <p>Производим уникальные изделия для развития спортивного будущего!</p>
      <Button as='a' href='#catalog'>
        Смотреть все изделия
      </Button>
    </section>
  );
};
