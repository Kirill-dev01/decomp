import React from 'react';

/** Универсальный контейнер для виджета (Погода, Карта, Эфир) с заголовком и любым содержимым внутри. */
interface WidgetProps {
    title: string;
    children: React.ReactNode;
}

export const Widget: React.FC<WidgetProps> = ({ title, children }) => {
    return (
        <div style={{ flex: '1 1 30%', minWidth: '250px', marginBottom: '20px' }}>
            <h4 style={{ color: '#0258d5', cursor: 'pointer', marginBottom: '10px' }}>{title}</h4>
            <div>{children}</div>
        </div>
    );
};