import React from 'react';
import CardWrapper from '../../common/Card';

export const withPropsStyles = (Component) => (props) => {
  return (<CardWrapper>
    <Component {...props} name="new name" />
    </CardWrapper>)

  
}