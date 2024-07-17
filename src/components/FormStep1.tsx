import React, { useState } from 'react';
import FormInput from './FormInput';

interface FormStep1Props {
  onNext: (data: any) => void;
}

const FormStep1 = ({ onNext }: FormStep1Props) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    roofArea: '',
    budget: '',
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
    <form onSubmit={handleSubmit}>
      <FormInput
        label='Name'
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
      />
      <FormInput
        label='Surname'
        type='text'
        name='surname'
        value={formData.surname}
        onChange={handleChange}
      />
      <FormInput
        label='Roof Area (m²)'
        type='number'
        name='roofArea'
        value={formData.roofArea}
        onChange={handleChange}
      />
      <FormInput
        label='Budget'
        type='number'
        name='budget'
        value={formData.budget}
        onChange={handleChange}
      />
      <button type='submit'>Next</button>
    </form>
  );
};

export default FormStep1;
