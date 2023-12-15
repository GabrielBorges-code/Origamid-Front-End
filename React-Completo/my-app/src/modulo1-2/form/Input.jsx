/* eslint-disable react/prop-types */
// import React from 'react'
const Ipt = ({ id, label, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </>
  );
};

export default Ipt;
