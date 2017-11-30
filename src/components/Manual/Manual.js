import React from 'react';
import Wrapper from '../Wrapper/Wrapper'
import WrapperManual from '../Wrapper/WrapperManual'
import {Link} from 'react-router';

import './Manual.css';

export default ({ foo }) => (
  <Wrapper
    header="Manual" descr="This manual for users whom already have DP program" 
    tag="manual">
      <div className='wrapper-about-item'>
        <WrapperManual header='Основная последовательность'>
        <ol>
          <li>
            Зарегистрироваться на сайте, получить токен, сохранить его в Secret variables своего проекта
          </li>
          <li>
            Добавить несколько строк в .gitlab-ci.yml своего проекта
          </li>
          <li>
            При каждом push'е на сервер в выводе job будет предсказание в формате  название файла : вероятность ошибки
          </li>
        </ol>
        </WrapperManual>
        <WrapperManual header='Получение токена'>
        <ol>
          <li> Зарегистрироваться на сайте через страницу <Link to='/login' style={{ color: '#000', borderBottom: '1px solid'}}>Log in</Link>
          </li>
          <li>
            Сохранить token в secret variables в Settings > CI/CD, назвав переменную TOKEN
            <br />
            <br />
            <p style={{ textAlign: 'center' }}>
              <img src='images/manual1.png' alt='screen of example' style={{ width: '100%' }}/>
            </p>
          </li>
        </ol>
        </WrapperManual>
        <WrapperManual header='Сохранение ссылки на образ клиента на DockerHub'>
          Мы распостраняем клиент как Docker Image. Необходимо добавить адрес Image в в secret variables в Settings > CI/CD, чтобы затем получать к нему доступ из .gitlab-ci.yml
          <br />
          <br />
          <p style={{ textAlign: 'center' }}>
            <img src='images/manual2.png' alt='screen of example' style={{ width: '100%' }}/>
          </p>
        </WrapperManual>
        <WrapperManual header='Изменение .gitlab-ci.yml'>
          Предположим, что у вашего проекта не было .gitlab-ci.yml Тогда вам следует создать этот файл в корне вашего проекта и 
          скопировать в него код <a href='https://pastebin.com/JsqYrsyg' style={{ color: '#000', borderBottom: '1px solid', textDecoration: 'none'}}>отсюда</a>
        </WrapperManual>
      </div>
  </Wrapper>
);