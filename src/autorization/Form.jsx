import { useForm } from 'react-hook-form'
import styles from '/src/autorization/aururization.module.css'

const sendData = ({email, password}) => {
  console.log({email, password})
}

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: '',
        }
    })

    const emailProps = {
        pattern: { 
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Некорректный E-mail.'
        }
    };

    // eslint-disable-next-line react-hooks/incompatible-library
    const password = watch('password');
    const passwordProps = {
        minLength: { value: 3, message: 'Неверный пароль. Должно быть не меньше 3 символов' },
        maxLength: { value: 20, message: 'Неверный пароль. Должно быть не больше 20 символов' },
        pattern: {
        value: /^(?=.*?[A-Z])(?=.*?\d)(?=.*?[-#$%!@&*?]).+$/,
        message: 'Пароль должен содержать хотя бы одну заглавную букву, цифру и специальный символ.'
        }
    };

    const repeatPasswordProps = {
      validate: (value) =>
        value === password || 'Пароли не совпадают.',
    };

    const errorEmail = errors.email?.message;
    const errorPassword = errors.password?.message;
    const errorRepeatPassword = errors.repeatPassword?.message;

  return (
    <div className={styles.container}>
      <div className={styles.blockSignIn}>
        <section className={styles.header}>
          <h2 className={styles.signIn}>Зарегистрироваться</h2>
          <p className={styles.logIn}>
            У вас уже есть аккаунт?{" "}
            <a className={styles.links} href="#">
              Войти
            </a>
          </p>
        </section>
        <section className={styles.main}>
          <form onSubmit={handleSubmit(sendData)}>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Адрес электронной почты</label>
              <input
                className={styles.inputs}
                type="email"
                name="email"
                {...register('email' ,emailProps)}
              />
              {errorEmail && <div className={styles.error}>{errorEmail}</div>}
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Пароль</label>
              <input
                className={styles.inputs}
                type="password"
                name="password"
                {...register('password', passwordProps)}
              />
              {errorPassword && (
                <div className={styles.error}>{errorPassword}</div>
              )}
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Подтверждение пароля</label>
              <input
                className={styles.inputs}
                type="password"
                name="repeatPassword"
                {...register('repeatPassword', repeatPasswordProps)}
              />
              {errorRepeatPassword && (
                <div className={styles.error}>{errorRepeatPassword}</div>
              )}
            </div>
            <button
              className={styles.buttonSignIn}
              type="submit"
              disabled={
                !!errorEmail||
                !!errorPassword||
                !!errorRepeatPassword
              }
            >
              Создать аккаунт
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Form;