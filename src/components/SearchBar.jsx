import { useState } from 'react';
import { useNavigate, Navigate  } from "react-router-dom";
import { InputGroup, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import sups from "../utils/sup.json";

export function SearchBar() {
  
  const [busqueda, setBusqueda] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterData = () => {
    const filtrat = sups.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if(filtrat.length > 0 && searchTerm.trim() !== '') return filtrat;
    else return [];
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    // Handle search logic here
    // FALTA CONDICIÓN PARA NO REDIRIGIR, Y HACER TIPO ALERT DE INPUT VACIO
    navigate('/listProducts/'+searchTerm); 
  };

  return (
    <div>
      {/* hacer responsive de este width */}
        <InputGroup style={{ width: '500px' }}>
          <FormControl type="text" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleInputChange} />
          <Button variant="light" type="submit" id="button-addon2" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} className="text-muted" /></Button>
          <Dropdown.Menu show={filterData().length > 0} style={{ width: '462px' }} className="text-center">
            {filterData().map(item => (
              <Dropdown.Item href={'/productInfo/'+item.id} key={item.id}>{item.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </InputGroup>
    </div>
  );
}
