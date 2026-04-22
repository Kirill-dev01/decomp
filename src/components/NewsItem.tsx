import React from 'react';

/** Компонент для отображения одной новости с иконкой, текстом и ссылкой. */
interface NewsItemProps {
    icon?: string;
    text: string;
    link: string;
}

export const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
            {icon && <span style={{ fontSize: '12px' }}>{icon}</span>}
            <a href={link} style={{ textDecoration: 'none', color: '#000' }}>{text}</a>
        </div>
    );
};