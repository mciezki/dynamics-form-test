import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, type, name, value, onChange }: FormInputProps) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
