import s from './footer.module.scss';
import Logo from '../../assets/logo.svg?react';
import WhatsUpIcon from '../../assets/social-media-icons/whats-up.svg?react';
import RutubeIcon from '../../assets/social-media-icons/rutube.svg?react';
import YoutubeIcon from '../../assets/social-media-icons/youtube.svg?react';
import VKIcon from '../../assets/social-media-icons/vk.svg?react';
import TelegramIcon from '../../assets/social-media-icons/telegram.svg?react';
import ArrowUp from '../../assets/arrow-up.svg?react';

export const Footer = () => {
  return (
    <footer className={s.footer} id='contacts'>
      <div className={s.footerContent}>
        <div className={s.footerLeft}>
          <p>ИП Резник Александр Александрович</p>
          <p className={s.inn}>ИНН: 230808907002</p>
          <p className={s.city}>Краснодар</p>
          <p className={s.address}>350012, Майский проезд, 22, Россия</p>
        </div>

        <div className={s.footerCenter}>
          <Logo className={s.logo} />
          <a href='#top' aria-label={'Перейти вверх страницы'}>
            <div className={s.arrowUp}>
              <ArrowUp />
            </div>
            НАВЕРХ
          </a>
        </div>

        <div className={s.footerRight}>
          <p>+7 918 417-50-23</p>
          <p>+7 989 140-25-25</p>
          <p>
            <a href='mailto:info@kaleidoscope-games.ru' className={s.email}>
              info@kaleidoscope-games.ru
            </a>
          </p>
          <div className={s.links}>
            <a href='#' className={s.link} rel='nofollow' aria-label={'Мы в WhatsUp'}>
              <WhatsUpIcon />
            </a>
            <a href='#' className={s.link} rel='nofollow' aria-label={'Мы на Rutube'}>
              <RutubeIcon />
            </a>
            <a href='#' className={s.link} rel='nofollow' aria-label={'МЫ на Youtube'}>
              <YoutubeIcon />
            </a>
            <a href='#' className={s.link} rel='nofollow' aria-label={'Мы ВКонтакте'}>
              <VKIcon />
            </a>
            <a
              href='#'
              className={s.link + ' ' + s.telegram}
              rel='nofollow'
              aria-label={'Мы в телеграмме'}
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={s.footerBottom}>
        <a href='#'>Политика конфиденциальности</a>
        <p>© 2024 «Калейдоскоп игр» — Все права защищены</p>
      </div>
    </footer>
  );
};
