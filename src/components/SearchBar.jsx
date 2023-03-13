import { useState } from 'react';
import { InputGroup, FormControl, Button, Container, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import sups from "../utils/sup.json";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterData = () => {
    const filtrat = sups.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if(filtrat.length > 0 && searchTerm.trim() !== ''){
      return filtrat;
    }else{
      return [];
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    // Handle search logic here
  };

  // Dropdown
  const [showMenu, setShowMenu] = useState(true);


  return (
    <Container>
        <InputGroup style={{ width: '500px' }}>
          <FormControl type="text" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleInputChange} />
          <Button variant="light" type="submit" id="button-addon2" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} className="text-muted" /></Button>
        </InputGroup>
      <Dropdown.Menu show={showMenu}>
        {/* Poner links!! */}
      {filterData().map(item => (
          <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
        ))}
        
        <Dropdown.Divider />
        <Dropdown.Item href='#' eventKey="4">Search</Dropdown.Item>
      </Dropdown.Menu>
   
    </Container>
  );
}
