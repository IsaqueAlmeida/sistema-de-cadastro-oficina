import React, { useState } from 'react';
import axios from 'axios';

function ServiceConfirmation({ customerData, selectedParts, totalPrice }) {
  const [personName, setPersonName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // const [price, setPrice] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceData = {
      customerName: customerData.name,
      vehicleData: customerData.vehicleData,
      serviceName: selectedParts.name,
      partUsed: selectedParts.id,
      totalPrice: totalPrice,
      startDate: startDate,
      endDate: endDate,
      responsiblePerson: personName,
    };

    try {
      const response = await axios.post('/services', serviceData);
      console.log(response.data); // exige a mensagem 'Serviço cadastrado com sucesso!'
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='service-confirmation'>
      <h2>Confirmação do serviço</h2>
      <div className='customer-data'>
        <h3>Dados do cliente</h3>
        <p><strong>Nome: </strong>{ customerData.name }</p>
        <p><strong>Telefone: </strong>{ customerData.phone }</p>
        <p><strong>Veículo: </strong>{ customerData.vehicleData }</p>
      </div>
      <div className='selected-part'>
        <h3>Peça selecionada</h3>
        <p><strong>Nome: </strong>{ selectedParts.name }</p>
        <p><strong>Preço: </strong>{ selectedParts.price }</p>
      </div>
      <form onSubmit={ handleSubmit }>
        <label>
          Nome da pessoa responsável pelo serviço:
          <input type='text' value={ personName } onChange={ (event) => setPersonName(event.target.value) } />
        </label>
        <label>
          Data e hora de início do serviço:
          <input type='datetime-local' value={ startDate } onChange={ (event) => setStartDate(event.target.value) } />
        </label>
        <label>
          Data e hora de término do serviço:
          <input type='datetime-local' value={ endDate } onChange={ (event) => setEndDate(event.target.value) } />
        </label>
        <button type='submit' onChange={ handleSubmit }>Confirmar serviço</button>
      </form>
    </div>
  );
}
export default ServiceConfirmation;
