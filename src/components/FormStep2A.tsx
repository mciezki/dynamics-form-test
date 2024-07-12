import React, { useState } from 'react';
import FormInput from './FormInput';

interface FormStep2AProps {
  onNext: (data: any) => void;
}

const FormStep2A: React.FC<FormStep2AProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    parcelArea: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div>
      <h2>Form Step 2A</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Parcel Area (m²)'
          type='number'
          name='parcelArea'
          value={formData.parcelArea}
          onChange={handleChange}
        />
        <button onClick={onNext}>Next</button>
      </form>
    </div>
  );
};

export default FormStep2A;
