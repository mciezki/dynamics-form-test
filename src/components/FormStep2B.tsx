import React, { useState } from 'react';

interface FormStep2BProps {
  onNext: (data: any) => void;
}

const FormStep2B: React.FC<FormStep2BProps> = ({ onNext }) => {
  const [sure, setSure] = useState<boolean>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ sure });
  };

  return (
    <div>
      <h2>Form Step 2B</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Are you sure? It can be very expensive.</label>
          <div>
            <label className='checkbox-label'>
              Yes
              <input
                type='radio'
                name='sure'
                value='yes'
                checked={sure === true}
                onChange={(e) => setSure(true)}
              />
            </label>
            <label className='checkbox-label'>
              No
              <input
                type='radio'
                name='sure'
                value='no'
                checked={sure === false}
                onChange={(e) => setSure(false)}
              />
            </label>
          </div>
        </div>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default FormStep2B;
