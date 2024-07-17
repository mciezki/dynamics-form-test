import React from 'react';
// import FormInput from './FormInput';
import SuccessCustomerInsightsForm from './customer-insights-form/SuccessCustomerInsightsForm';

// interface FormFinalAProps {
//   data: any;
//   onSubmit: (data: any) => void;
// }

const FormFinalA = ({ data }: { data: any }) => {
  console.log(data);
  return <SuccessCustomerInsightsForm />;
};

export default FormFinalA;
