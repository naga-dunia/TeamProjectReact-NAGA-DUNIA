import React from 'react';
import Title from './Title';
import JsonPlaceHolder from './jsonholder'

// Generate Order Data

export default function Orders() {
  
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
        <JsonPlaceHolder />
    </React.Fragment>
  );
}