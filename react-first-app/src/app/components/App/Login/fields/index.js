import React from 'react';

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      {meta.error &&
        meta.touched && (
          <div style={{ color: 'red' }}>{meta.error}</div>
        )}
    </div>
  );
};
