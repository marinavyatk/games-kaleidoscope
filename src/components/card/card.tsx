import { ComponentPropsWithoutRef } from 'react';
import CardBackground from '../../assets/card.svg?react';
import CatalogModel from '../../assets/catalog-model.png';

import clsx from 'clsx';

import s from './card.module.scss';
import { Button } from '../button/button.tsx';

export type CardProps = {
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
} & ComponentPropsWithoutRef<'div'>;

export const Card = (props: CardProps) => {
  const { className, ...restProps } = props;

  const classNames = clsx(s.card, className);

  return (
    <div className={classNames} {...restProps}>
      <CardBackground className={s.cardBackground} />
      <p className={s.cardName}>КОРОБКА № 2</p>
      <p className={s.description}>МАФ: развлекательно-игровые комплексы КОРОБКА № 2</p>
      <div className={s.model}>
        <img src={CatalogModel} alt='' />
      </div>
      {restProps.children}
      <Button>Смотреть</Button>
    </div>
  );
};
