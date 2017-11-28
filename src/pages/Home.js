import React, { Component } from 'react';
import Menu from '../components/Menu/Menu'
import Banner from '../components/Banner/Banner'
import Info from '../components/Info/Info'
import Manual from '../components/Manual/Manual'
import Form from '../components/Form/Form'
import WrapperAbout from '../components/Wrapper/WrapperAbout'

import '../App.css';

class Home extends Component {

  handleMenu = (tag) => {
    const element = document.getElementById(tag);
    
    element.scrollIntoView(true);
    window.scrollBy(0,-50);
  };

  render() {
    return (
      <div>
        <div id='menu'>
          <Menu funcChange={this.handleMenu} />
        </div>
        <Banner funcChange={this.handleMenu}/>
          <WrapperAbout header='Sybil'>
              Проект Defect Prediction создает сервис поиска ошибок в исходном коде при помощи машинного обучения.
              Сервис помогает командам разработчиков решать проблемы поиска ошибок, оценки качества кода и определения приоритетов тестирования.
          </WrapperAbout>
          <Info />
          <Manual />
          <Form />
        </div>
    );
  }
}

export default Home;
