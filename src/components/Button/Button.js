import React from 'react';

function Button(props) {
  const { onClick, children, ...buttonProps } = props;

  return (
    <button {...buttonProps} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
