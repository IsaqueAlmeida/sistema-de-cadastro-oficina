import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './Login';
import ServicesList from './ServicesList';
import ServiceConfirmation from './ServiceConfirmation';
import SelectParts from './SelectParts';

const Routers = () => {
  return (
    <BrowserRouter>
      <Login />
      <Routes>
        <Route exact path="/" element={<ServicesList />} />
        <Route exact path="/select-parts" element={ <SelectParts/> } />
        <Route exact path="/service-confirmation/:id" element={ <ServiceConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
