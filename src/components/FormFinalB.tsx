import React, { useEffect, useState } from 'react';
import FallbackCustomerInsightsForm from './customer-insights-form/FallbackCustomerInsightsForm';

const FormFinalB: React.FC = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
    script.async = true;

    script.onload = () => {
      console.log('External script loaded successfully - it should work');
      setIsScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {isScriptLoaded ? (
        <FallbackCustomerInsightsForm />
      ) : (
        <p>Skrypt się nie wczytał</p>
      )}
    </div>
  );
};

export default FormFinalB;
