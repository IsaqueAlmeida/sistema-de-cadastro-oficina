import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/services');
        setServices(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1>Lista de Serviços</h1>
      {services.map((service) => (
        <div key={service.customerName}>
          <p>Nome do cliente: {service.customerName}</p>
          <p>Veículo: {service.vehicleData}</p>
          <p>Serviço: {service.serviceName}</p>
          <p>Data de início: {service.startDate}</p>
          <p>Data de término: {service.endDate}</p>
          <p>Responsável pelo serviço: {service.responsiblePerson}</p>
          <p>Preço total: R$ {service.totalPrice.toFixed(2)}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
