import React, { Component } from 'react';
import MenuSimple from '../components/Menu/MenuSimple'
import Wrapper from '../components/Wrapper/Wrapper'

class About extends Component {

  render() {
    return (
      <div>
        <MenuSimple />
        <div style={{padding: '30px'}}></div>
        <Wrapper
          header="Sybil" 
          descr="For companies which develop software to find bugs in the earliest stages of development.">
            <div>
              Проект Defect Prediction создает сервис поиска ошибок в исходном коде при помощи машинного обучения. Сервис помогает командам разработчиков решать проблемы поиска ошибок, оценки качества кода и определения приоритетов тестирования.
            </div>
        </Wrapper>
        <Wrapper
          header="Проблема">
            <div>
            Согласно исследованию, проведенному в университете Кембриджа, в среднем разработчики тратят 50% рабочего времени на поиск и исправление ошибок, что стоит всей индустрии в целом 312 миллиардов долларов в год. При этом нельзя просто меньше заботиться об ошибках - даже один дефект способен привести к катастрофическим последствиям (слайды с катастрофами)
            <br />
            Первый пример: Это крушение ракеты Ариан-5, вызванный ошибкой в управляющей программе.
            <br />
            Второй пример: Брокер Knight Capital's потерял $440 mln за 45 минут из за ошибки в алгоритме торговли
            <br />
            Существует множество инструментов, которые помогают работать с ошибками. Все они либо работают с исходном кодом, как с текстом, либо анализируют ход выполнения программы. Эти подходы позволяют проверить код на наличие типовых ошибок.
            </div>
        </Wrapper>
        <Wrapper
          header="Особенности Sybil">
            <div>
            Наша система работает иначе. Обученная на десятках реальных проектов, она “смотрит” на код так, как бы на него смотрел опытный программист и для каждого файла программы рассчитывает вероятность нахождения в нём ошибки. Это позволяет мгновенно локализовать ошибки и оценивать качество кода.
            Система благодаря методам машинного обучения способна искать ошибки любых типов.
            Оценка качества кода.
            </div>
        </Wrapper>
        <Wrapper
          header="Для кого и зачем">
            <div>
            Нашими клиентами являются компании, разрабатывающие ПО и отдельные команды разработчиков. Мы ориентируемся на те компании и команды, которые уже используют автоматизированные решения для обеспечения качества кода.
            В компаниях - тим лиды, кволити ашуранс инженеры
            Какие полезные возможности даёт наш продукт? Каким компания? В каких условиях? В каких командах? При каком ворк флоу?
            Описание возможностей (С учётом того, что алгоритм возвращает вероятность ошибки в модуле в настоящий момент):
            <br />
            В короткие сроки необходимо выпустить новую версию продукта. Нет возможности протестировать всё одинаково хорошо. Надо расставить приоритеты. Наш продукт позволяет отранжировать модули по вероятности возникновения ошибки. Эта информация поможет расставить приоритеты точнее.
            <br />
            Необходимо иметь представление о состоянии кодовой базы. Например, используется такой показатель, как покрытие кода тестами. Мы предлагаем использовать “вероятность ошибки” как ещё один такой показатель. Это позволит в краткие сроки принимать взвешенные решения о дальнейшем ходе разработки. Например:
            <ul>
              <li>если в какой-то момент модуль становится “критически неустойчивым”, то стоит разделить его логику по двум отдельным модулям. 
              </li>
              <li>2.2 Другим решением является запрет на добавление в репозиторий новой версии модуля, если она слишком “ошибкопасна”. 
              </li>
              <li>2.3 Также можно использовать “ошибкоопасность” для определения того, стоит ли добавлять новую версию модуля в сборку для тестирования или над ней необходимо поработать ещё.
              </li>
            </ul>
            </div>
        </Wrapper>
      </div>
    );
  }
}

export default About;
