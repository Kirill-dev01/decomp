import React from 'react';
import { NewsItem } from './components/NewsItem';
import { SearchSection } from './components/SearchSection';
import { Banner } from './components/Banner';
import { Widget } from './components/Widget';

function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>

      {/* ВЕРХНИЙ БЛОК: Новости и боковой тизер */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: '1' }}>
          <div style={{ display: 'flex', gap: '15px', color: '#0258d5', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>
            <span>Сейчас в СМИ</span>
            <span style={{ color: '#ccc' }}>в Германии</span>
            <span style={{ color: '#ccc' }}>Рекомендуем</span>
          </div>

          <NewsItem icon="🔵" text="Путин упростил получение автомобильных номеров" link="#" />
          <NewsItem icon="🔵" text="В команде Зеленского раскрыли план реформ на Украине" link="#" />
          <NewsItem icon="🔵" text="«Турпомощь» прокомментировала гибель десятков россиян" link="#" />

          <div style={{ display: 'flex', gap: '15px', marginTop: '15px', fontSize: '14px', fontWeight: 'bold' }}>
            <span>USD MOEX 63.52</span>
            <span>EUR MOEX 70.86</span>
            <span>НЕФТЬ 64.90</span>
          </div>
        </div>

        <div style={{ width: '250px', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: '#e0f2f1', borderRadius: '50%', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#00695c', fontWeight: 'bold' }}>ЧА<br />ЩА</span>
          </div>
          <h4 style={{ color: '#0258d5', margin: '5px 0' }}>Работа над ошибками</h4>
          <p style={{ fontSize: '12px' }}>Смотрите на Яндексе и запоминайте</p>
        </div>
      </div>

      {/* СРЕДНИЙ БЛОК: Поиск и Баннер */}
      <SearchSection />
      <Banner
        imageSrc="https://placehold.co/900x100/333/fff?text=ФОРСАЖ:+ХОББС+И+ШОУ"
        link="#"
      />

      {/* НИЖНИЙ БЛОК: Сетка виджетов */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>

        <Widget title="Погода">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '30px' }}>🌧️</span>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>+17°</span>
            <span style={{ fontSize: '12px', color: '#666' }}>Утром +17, <br />днём +20</span>
          </div>
        </Widget>

        <Widget title="Посещаемое">
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '1.8' }}>
            <li><b>Недвижимость</b> — о сталинках</li>
            <li><b>Маркет</b> — люстры и светильники</li>
            <li><b>Авто.ру</b> — привод 4х4 до 500 000</li>
          </ul>
        </Widget>

        <Widget title="Карта Германии">
          <p style={{ fontSize: '14px' }}>Расписания</p>
        </Widget>

        <Widget title="Телепрограмма">
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '1.8' }}>
            <li>02:00 THT. Best <span style={{ color: '#999' }}>THT International</span></li>
            <li>02:15 Джинглики <span style={{ color: '#999' }}>Карусель INT</span></li>
            <li>02:25 Наедине со всеми <span style={{ color: '#999' }}>Первый</span></li>
          </ul>
        </Widget>

        <Widget title="Эфир">
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '1.8' }}>
            <li>▶ Управление как искусство <span style={{ color: '#999' }}>Успех</span></li>
            <li>▶ Ночь. Мир в это время <span style={{ color: '#999' }}>earthTV</span></li>
            <li>▶ Андрей Возн... <span style={{ color: '#999' }}>Совершенно секретно</span></li>
          </ul>
        </Widget>

      </div>
    </div>
  );
}

export default App;