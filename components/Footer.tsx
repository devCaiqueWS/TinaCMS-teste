import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ width: '100vw', backgroundColor: '#000', color: '#fff', fontSize: '16px', textAlign: 'center', justifyItems: 'center', padding: '20px 10px', lineHeight: 1.6, marginLeft: '-210px' }}>
      {/* Links */}
      <div style={{ marginBottom: '10px' }}>
        <a href="/privacy" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Privacy</a>|
        <a href="/terms" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Terms and Conditions</a>|
        <a href="/disclaimer" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Disclaimer</a>|
        <a href="/references" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>References</a>|
        <a href="/returns" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Returns</a>|
        <a href="/refunds" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Refunds</a>|
        <a href="/contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Contact</a>|
        <a href="/shipping" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Shipping Policy</a>
      </div>

      {/* Direitos reservados */}
      <p style={{ margin: '10px 0', padding: '10px' }}>All rights reserved.</p>

      {/* Declarações */}
      <p style={{ margin: '10px 0', fontSize: '11px', width: '50%', textAlign: 'center' }}>
        These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
      </p>
      <p style={{ margin: '10px 0', fontSize: '11px', width: '50%', textAlign: 'center' }}>
        The content of this site is for informational purposes only, and is not intended to replace professional medical advice, diagnosis or treatment. Always seek the advice of your doctor or other qualified health care professional about a medical condition, a suspected medical condition, and before starting a diet, exercise, or supplementation program or take or stop a medication.
      </p>
    </footer>
  );
};

export default Footer;