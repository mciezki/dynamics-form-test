// src/components/CustomerInsightsForm.tsx
import { useEffect, useLayoutEffect } from 'react';

const FallbackCustomerInsightsForm = ({ data }: { data: any }) => {
  console.log(data);

  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
    script.async = true;

    script.onload = () => {
      console.log('External script loaded successfully - it should work');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const firstNameElement = document.querySelector(
        'input[id^="firstname"]'
      ) as HTMLInputElement;
      const surnameElement = document.querySelector(
        'input[id^="lastname"]'
      ) as HTMLInputElement;

      if (firstNameElement && !firstNameElement.value) {
        firstNameElement.value = data.name;
      }
      if (surnameElement && !surnameElement.value) {
        surnameElement.value = data.surname;
      }
      if (
        surnameElement &&
        firstNameElement &&
        surnameElement.value &&
        firstNameElement.value
      ) {
        clearInterval(interval);
      }
      console.log('interval is working');
    }, 100);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
