import { useState } from 'react';
import FormStep1 from './components/FormStep1';
import FormStep2A from './components/FormStep2A';
import FormStep2B from './components/FormStep2B';
import FormFinalA from './components/FormFinalA';
import FormFinalB from './components/FormFinalB';
import './components/styles.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const handleNext = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <FormStep1 onNext={handleNext} />;
      case 2:
        if (formData.roofArea > 50 && formData.budget > 60000) {
          return <FormStep2A onNext={handleNext} />;
        } else {
          return <FormStep2B onNext={handleNext} />;
        }
      case 3:
        if (formData.parcelArea >= 1000 || formData.sure) {
          return <FormFinalA data={formData} />;
        } else {
          return <FormFinalB formData={formData} />;
        }
      default:
        return null;
    }
  };

  return <div className='app'>{renderStep()}</div>;
};

export default App;
