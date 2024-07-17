import React from 'react';
import FallbackCustomerInsightsForm from './customer-insights-form/FallbackCustomerInsightsForm';

const FormFinalB = ({ formData }: { formData: any }) => {
  console.log(formData);
  return <FallbackCustomerInsightsForm data={formData} />;
};

export default FormFinalB;
