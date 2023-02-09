import React from 'react';
import { useSelector } from 'react-redux';

function AuthorizationUrl() {
  const payment = useSelector((state) => state.paymentReducer);

  console.log("paymentReducer", payment)


  return (
    <div>
      <iframe src={payment[1]?.data?.data?.authorization_url}
        width="90%"
        height="500px"
        scrolling="no"
      />
    </div>
  )
}

export default AuthorizationUrl