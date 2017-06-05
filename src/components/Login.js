import React from 'react';
import {
    Link
} from 'react-router-dom';

class Login extends React.Component {
   render() {
      return (
          <div className="loginWrapper">
              <div className = "container">
                  <img className="logo" id = "logo" src="./src/static/images/logo.png"/>
                  <div className="entryTexts">
                      <h1 className="auth">Авторизация</h1>
                      <p>Чтобы войти в систему, необходимо<br/>
                          авторизоваться через ваш ID </p>
                  </div>

                  <div className="inputFields">
                      <input type = "text" placeholder = "Введите ID"/>
                      <Link to="/sms"><button type = "button" value = "Войти" id = "loginBtn">Войти</button></Link>
                  </div>

                  <p className="copyrightText"> ©2017 AO "Қазақстан Темір Жолы". Все права защищены.</p>
              </div>
          </div>
      );
   }
}

export default Login;
