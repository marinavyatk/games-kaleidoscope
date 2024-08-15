import { Input } from '../input/input.tsx';
import { Button } from '../button/button.tsx';
import s from './form.module.scss';

export const Form = () => {
  return (
    <form action=''>
      <div className={s.mainUserData}>
        <Input
          label={'Ваше Имя'}
          placeholder={'Введите Имя'}
          containerProps={{ className: s.inputContainer }}
        />
        <Input
          label={'Номер телефона'}
          placeholder={'Введите номер'}
          type='tel'
          containerProps={{ className: s.inputContainer }}
        />
      </div>
      <Input label={'Сообщение'} placeholder={'Оставьте сообщение'} />
      <div className={s.submitBlock}>
        <p>Нажимая на кнопку отправить, я&nbsp;даю согласие на обработку персональных данных</p>
        <Button>ОТПРАВИТЬ</Button>
      </div>
    </form>
  );
};
