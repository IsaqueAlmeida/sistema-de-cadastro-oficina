import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

function Login() {
  const [qrCode, setQrCode] = useState('');
  const [customer, setCustomer] = useState('');

  const handleQrCodeChange = (event) => {
    setQrCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3000/' + qrCode)
      .then((response) => setCustomer(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          QrCode:
          <input type='text' value={ qrCode } onChange={ handleQrCodeChange }/>
        </label>
        <QRCode value={ qrCode } />
        <button type='submit'>Login</button>
      </form>
      {customer && (
        <div>
          <p>Customer: { customer.name }</p>
          <p>Vehicle: { customer.vehicle }</p>
        </div>
      )}
    </div>
  );
}

export default Login;
