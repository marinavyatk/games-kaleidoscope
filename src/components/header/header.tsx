import { ComponentPropsWithoutRef, ReactNode } from 'react';
import clsx from 'clsx';
import s from './header.module.scss';
import Logo from '../../assets/logo.svg?react';

export type HeaderProps = {
  player?: ReactNode;
} & ComponentPropsWithoutRef<'header'>;

export const Header = (props: HeaderProps) => {
  const { player, className, ...restProps } = props;
  const classNames = clsx(s.header, className);

  return (
    <header {...restProps} className={classNames}>
      <div className={s.links}>
        <a href='#about'>О нас</a>
        <a href='#catalog'>Каталог</a>
        <a href='#history'>История</a>
        <a href='#realized'>Реализовано</a>
      </div>

      <Logo className={s.logo} />
      <div className={s.rightBlock}>
        <a href='#contacts'>Контакты</a>
        <div className={s.player}>Player</div>
      </div>
    </header>
  );
};
