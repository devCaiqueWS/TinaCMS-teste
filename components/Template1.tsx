import React, { useEffect, useState } from 'react';

interface Template1Props {
  pageNumber: number;
  title: string;
  content: string;
}

const Template1: React.FC<Template1Props> = ({ pageNumber, title, content }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/content/paginatemplate1/pages_1000.json');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, lineHeight: 1.6 }}>
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f8f8' }}>
        <p>Advertisement</p>
        <h1>{title}</h1>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {/* Espaço para o GIF */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWdyZ3V4NjB4eDAxazJ0Y241c3Q2OGMyOHRwb2l5bXJieXloN3B2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hgp6vLE2BLyN9HWA4K/giphy.gif"
            alt={`Page Number: ${pageNumber}`}
            style={{ width: '650px', height: 'auto', marginBottom: '20px' }}
          />
        </div>

        {/* Botão antes do conteúdo */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            style={{
              backgroundColor: '#2ecc71',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Click Here to Watch The Video
          </button>
        </div>

        {/* Conteúdo */}
        <p>{content}</p>

        {/* Botão depois do conteúdo */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            style={{
              backgroundColor: '#2ecc71',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Click Here to Watch The Video
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f8f8f8', fontSize: '12px', color: '#555', marginTop: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px', padding: '15px' }}>
          <p>Copyright © 2025 by getflowempower.com. All rights reserved.</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
          <p>
            This site is not a part of the Youtube website or Youtube Inc. Additionally, This site is NOT endorsed by Youtube in any way. YOUTUBE is a trademark of YOUTUBE, Inc.
          </p>
          <p>
            <strong>FDA Compliance:</strong> The information on this website has not been evaluated by the Food & Drug Administration or any other medical body. We do not aim to diagnose, treat, cure or prevent any illness or disease. Information is shared for educational purposes only. You should always consult your doctor before acting on any content on this website, especially if you are pregnant, nursing, taking medication or have a medical condition.
          </p>
          <p>
            <strong>Results May Vary:</strong> The weight loss results testimonials are in no way a guarantee of results. Individual weight loss results, including amount and time, will vary. Whether genetic or environmental, it should be noted that food intake, rates of metabolism and levels of exercise and physical exertion vary from person to person. This means weight loss results will also vary from person to person.
          </p>
          <p>
            Some names and personal identifying information on this site have been changed to protect the privacy of individuals. No individual result should be seen as typical.
          </p>
          <p>
            <strong>Marketing Disclosure:</strong> This website is a marketplace. As such you should know that the owner has a monetary connection to the product and services advertised on the site. The owner receives payment whenever a qualified lead is referred but that is the extent of it.
          </p>
          <p>
            <strong>Advertising Disclosure:</strong> This website and the products & services referred to on the site are advertising marketplaces. This website is an advertisement and not a news publication. Any photographs of persons used on this site are models. The owner of this site and of the products and services referred to on this site only provides a service where consumers can obtain and compare.
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', backgroundColor: '#fff', padding: '6px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="/shipping" style={{ color: '#3b3b3b', textDecoration: 'none' }}>Shipping</a>
            <a href="/contact" style={{ color: '#3b3b3b', textDecoration: 'none' }}>Contact</a>
            <a href="/privacy-policy" style={{ color: '#3b3b3b', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms-of-service" style={{ color: '#3b3b3b', textDecoration: 'none' }}>Terms Of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Template1;