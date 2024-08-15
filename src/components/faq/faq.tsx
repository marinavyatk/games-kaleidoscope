import { ComponentPropsWithoutRef } from 'react';
import { AccordionItem } from './accordionItem/accordionItem.tsx';

export const faqData = [
  {
    question: 'Какой возможен минимальный заказ?',
    answer:
      'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  },
  {
    question: 'Какие варианты оплаты?',
    answer:
      'Основной вариант оплаты — оплата по счёту с оформление договора поставки. Договор поставки, регулирует наши отношения, включая условия поставки, сроки, объёмы и порядок оплаты, что обеспечивает защиту интересов обеих сторон.',
  },
  {
    question: 'Где посмотреть на готовые конструкции?',
    answer:
      'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  },
];

export type FAQProps = {
  faqData: { question: string; answer: string }[];
} & ComponentPropsWithoutRef<'div'>;

export const FAQ = (props: FAQProps) => {
  const { faqData, ...restProps } = props;

  const items = faqData.map((q) => {
    return <AccordionItem question={q.question} answer={q.answer} key={q.question} />;
  });

  return <div {...restProps}>{items}</div>;
};
