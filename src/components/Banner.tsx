import React from 'react';

/** Компонент широкого рекламного баннера под строкой поиска. */
interface BannerProps {
    imageSrc: string;
    link: string;
}

export const Banner: React.FC<BannerProps> = ({ imageSrc, link }) => {
    return (
        <a href={link} style={{ display: 'block', margin: '20px 0' }}>
            <img src={imageSrc} alt="Banner" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </a>
    );
};