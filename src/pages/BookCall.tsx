import React, { useEffect } from 'react';

const BookCall = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/rayanelkhababi1/one-on-one-call"
        style={{ 
          minWidth: '320px',
          height: '100vh'
        }}
      />
    </div>
  );
};

export default BookCall;