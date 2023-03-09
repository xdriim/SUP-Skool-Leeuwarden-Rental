import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    // Handle search logic here
  };

  return (
    <InputGroup style={{ width: '500px' }}>
      <FormControl type="text" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleInputChange} />
      <Button variant="light" type="submit" id="button-addon2" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} className="text-muted" /></Button>
    </InputGroup>
  );
}
