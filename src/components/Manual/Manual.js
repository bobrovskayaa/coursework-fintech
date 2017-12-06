import React from 'react';
import Wrapper from '../Wrapper/Wrapper'
import {Link} from 'react-router';

import './Manual.css';

const api_post_ex = 'curl -X POST -H "Content-Type: application/json" -d "{"email":"sample@mail.ru", "password":"pass"}" http://defect-prediction-server.herokuapp.com/auth/register';
const api_get_ex = '{"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz..."}';

export default ({ foo }) => (
  <Wrapper
    header="Manual" descr="This manual for users whom already have DP program" 
    tag="manual" wrpStyle='main'>
      <div className='wrapper-about-item'>
        <Wrapper header='Основная последовательность' wrpStyle='manual'>
        <ol>
          <li>
            Зарегистрироваться на сайте, получить токен, сохранить его в Secret variables своего проекта  
          </li>
          <li>
            Добавить несколько строк в .gitlab-ci.yml своего проекта
          </li>
          <li>
            При каждом push'е на сервер в выводе job будет предсказание в формате  <code>название файла : вероятность ошибки</code>
          </li>
        </ol>
        </Wrapper>
        <Wrapper header='Получение токена' wrpStyle='manual'>
        <ol>
          <li> Зарегистрироваться на сайте через страницу <Link to='/coursework-fintech/build//login' className='manual-link'>Log in</Link>
          <br/>
            Можно непосредственно воспользоваться API:
          <br/>
          <code>
            {api_post_ex}
          </code>
          <br/>
            И получить ответ в виде:
          <br/>
          <code>
            {api_get_ex}
          </code>
          </li>
          <li>
            Сохранить <code>token</code> в secret variables в <strong>Settings > CI/CD</strong>, назвав переменную TOKEN
            <br />
            <br />
            <p style={{ textAlign: 'center' }}>
              <img src='images/manual1.png' alt='screen of example' style={{ width: '100%' }}/>
            </p>
          </li>
        </ol>
        </Wrapper>
        <Wrapper header='Сохранение ссылки на образ клиента на DockerHub' wrpStyle='manual'>
          Мы распостраняем клиент как Docker Image. Необходимо добавить адрес Image в в secret variables в <strong>Settings > CI/CD</strong>, чтобы затем получать к нему доступ из .gitlab-ci.yml
          <br />
          <br />
          <p style={{ textAlign: 'center' }}>
            <img src='images/manual2.png' alt='screen of example' style={{ width: '100%' }}/>
          </p>
        </Wrapper>
        <Wrapper header='Изменение .gitlab-ci.yml' wrpStyle='manual'>
          Предположим, что у вашего проекта не было .gitlab-ci.yml Тогда вам следует создать этот файл в корне вашего проекта и 
          скопировать в него код <a href='https://pastebin.com/JsqYrsyg' className='manual-link'>с этого источника</a>
        </Wrapper>
      </div>
  </Wrapper>
);