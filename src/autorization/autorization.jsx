import { useState } from 'react';
import styles from '/src/autorization/aururization.module.css'

const sendData = ({email, password}) => {
  console.log({email, password})
}

const Autorization = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null)

  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(null)

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(target.value)) {
      setErrorEmail('Некорректный E-mail')
    } else {
      setErrorEmail(null)
    }
  }

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);

    if (!/^(?=.*?[A-Z])(?=.*?\d)(?=.*?[-#$%!@&*?])[A-Za-z\d\-#$%!@&*?]{8,20}$/.test(target.value)) {
      setErrorPassword('Пароль должен содержать от 8 до 20 символов, включая хотя бы одну заглавную букву, цифру и специальный символ.')
    } else {
      setErrorPassword(null)
    }
  }

  const onRepeatPasswordChange = ({ target }) => {
    setRepeatPassword(target.value);

    if (repeatPassword !== password) {
      setErrorRepeatPassword('Пароли не совпадают.')
    } else {
      setErrorRepeatPassword(null)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    sendData({email, password});
  }

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
          <form onSubmit={onSubmit}>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Адрес электронной почты</label>
              <input
                className={styles.inputs}
                type="email"
                name="email"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Пароль</label>
              <input
                className={styles.inputs}
                type="password"
                name="password"
                value={password}
                onChange={onPasswordChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Подтверждение пароля</label>
              <input className={styles.inputs}
                type="password"
                name="repeatPassword"
                value={repeatPassword} 
                onChange={onRepeatPasswordChange}/>
            </div>
            <button className={styles.buttonSignIn} type="submit" disabled={errorEmail !== null || errorPassword !== null || errorRepeatPassword}>
              Создать аккаунт
            </button>
          </form>
        </section>
        <section className={styles.authorizationIcon}>
          <button href="#" className={styles.buttonIcon}>
            <img src="public/Social media signup/Google.svg" alt="Google" />
          </button>
          <button href="#" className={styles.buttonIcon}>
            <img src="public/Social media signup/Appel.svg" alt="Appel" />
          </button>
          <button href="#" className={styles.buttonIcon}>
            <img src="public/Social media signup/Facebook.svg" alt="Facebook" />
          </button>
          <button href="#" className={styles.buttonIcon}>
            <img src="public/Social media signup/Twitter.svg" alt="Twitter" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Autorization