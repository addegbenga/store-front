import React from 'react';

interface IFormProps {
  children: any;
  onChange: any;
  onSubmit: any;
  label: string;
}

const Form: React.FC<IFormProps> = ({
  children,
  onChange,
  onSubmit,
  label,
}) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Form;
