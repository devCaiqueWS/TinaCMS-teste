import React, { useRef, useState, useEffect } from 'react';
import Footer from './Footer';
import styles from '../styles/global.module.css';

interface Template2Props {
    pageNumber: number;
    title: string;
    content: string[];
}

const Template2: React.FC<Template2Props> = ({ pageNumber, title, content }) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const [showButton, setShowButton] = useState(false);

    const scrollToVideo = () => {
        videoRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = () => {
        const footer = document.querySelector('footer');
        if (footer) {
            const footerTop = footer.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            setShowButton(footerTop <= windowHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
            {/* Título */}
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
                {title}
            </h1>

            {/* Vídeo */}
            <div ref={videoRef} style={{ marginBottom: '30px' }}>
                <video
                    controls
                    poster="https://via.placeholder.com/900x500.png?text=Video+Thumbnail"
                    style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
                >
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Referências científicas */}
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', color: 'darkgray' }}>Scientific References:</h2>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                <img
                    src="https://logos-world.net/wp-content/uploads/2021/11/Texas-Tech-Logo-2000.png"
                    alt="TTU"
                    style={{ width: '250px', height: 'auto' }}
                />
                <img
                    src="https://1000logos.net/wp-content/uploads/2022/08/MIT-Logo.png"
                    alt="MIT"
                    style={{ width: '250px', height: 'auto' }}
                />
                <img
                    src="https://www.bestarchitecturemasters.com/wp-content/uploads/2018/05/BERKELEY-LOGO-01.png"
                    alt="CAL"
                    style={{ width: '250px', height: 'auto' }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left', fontSize: '12px', lineHeight: 1.8 }}>
                {/* Primeira coluna com 16 itens */}
                <ul style={{ flex: 1, marginRight: '20px', color: 'gray' }}>
                    {content.slice(0, 16).map((topic, index) => (
                        <li key={index}>{topic}</li>
                    ))}
                </ul>

                {/* Segunda coluna com 16 itens */}
                <ul style={{ flex: 1, color: 'gray' }}>
                    {content.slice(16, 32).map((topic, index) => (
                        <li key={index + 16}>{topic}</li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <Footer />
            {showButton && (
                <div style={{ position: 'fixed', bottom: '50px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
                    <button
                        onClick={scrollToVideo}
                        className={styles.pulseBox}
                    >
                        ✔ Watch Video Now!
                    </button>
                </div>
            )}
        </div>
    );
};

export default Template2;