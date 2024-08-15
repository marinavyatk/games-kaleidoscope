import { ComponentPropsWithoutRef, ElementType } from 'react';
import ButtonBackground from '../../assets/btn-with-shadow.svg?react';

import clsx from 'clsx';

import s from './button.module.scss';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, ...restProps } = props;

  const classNames = clsx(s.button, className);

  return (
    <Component className={classNames} {...restProps}>
      <ButtonBackground className={s.btnBackground} />
      <span>{restProps.children}</span>
    </Component>
  );
};
