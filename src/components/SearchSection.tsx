import React from 'react';

/** Компонент поискового блока: навигация, строка ввода и кнопка "Найти". */
export const SearchSection: React.FC = () => {
    const categories = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё'];

    return (
        <div style={{ margin: '30px 0' }}>
            <div style={{ display: 'flex', gap: '15px', color: '#0258d5', fontWeight: 'bold', marginBottom: '10px' }}>
                {categories.map((cat, i) => <span key={i} style={{ cursor: 'pointer' }}>{cat}</span>)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ color: 'red', marginRight: '20px', margin: 0 }}>Яндекс</h2>
                <input type="text" style={{ flexGrow: 1, padding: '10px', border: '2px solid #fc0' }} />
                <button style={{ padding: '10px 20px', backgroundColor: '#fc0', border: 'none', fontWeight: 'bold' }}>Найти</button>
            </div>
            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Найдется всё. Например, фаза луны сегодня
            </p>
        </div>
    );
};