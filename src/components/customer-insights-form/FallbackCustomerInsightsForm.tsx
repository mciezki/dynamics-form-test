// src/components/CustomerInsightsForm.tsx
import React, { useEffect } from 'react';

const FallbackCustomerInsightsForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
    script.async = true;

    script.onload = () => {
      console.log('External script loaded successfully');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-form-id='e212f30e-3540-ef11-a316-7c1e52209e09'
      data-form-api-url='https://public-eur.mkt.dynamics.com/api/v1.0/orgs/90486ce6-c03e-ef11-8e4b-002248a38b79/landingpageforms'
      data-cached-form-url='https://assets-eur.mkt.dynamics.com/90486ce6-c03e-ef11-8e4b-002248a38b79/digitalassets/forms/e212f30e-3540-ef11-a316-7c1e52209e09'
    ></div>
  );
};

export default FallbackCustomerInsightsForm;
