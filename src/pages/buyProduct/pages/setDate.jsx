import { TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Select, MenuItem } from "@material-ui/core";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const WEEKDAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

const chunk = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    while (chunk.length < size) {
      chunk.unshift("");
    }
    chunkedArray.push(chunk);
  }
  return chunkedArray;
};


export const Calendar = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const today = new Date();
  const todayNumber = today.getDate();
  const currentMonthIndex = today.getMonth();
  const currentYearValue = today.getFullYear();

  console.log(todayNumber);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const selected = [selectedDay, currentMonth, currentYear];

  // En el cuerpo de la función Calendar:
  const years = Array.from({ length: 10 }, (_, index) => currentYear - 5 + index);
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  const daysWithBlanks = [...Array(firstDayOfWeek).fill(null), ...days];
  
  // Calcular cuántos días adicionales se necesitan para completar la última semana
  const remainingDays = (7 - (daysInMonth + firstDayOfWeek) % 7) % 7;
  const daysWithExtendedBlanks = [...daysWithBlanks, ...Array(remainingDays).fill(null)];
  
  const weeks = chunk(daysWithExtendedBlanks, 7);

  // Información producto
  const [cart, setCart] = useState([]);
  

  const [stock, setStock] = useState(0);
  const [availableHours, setAvailableHours] = useState([]);
  const [hourSelected, setHourSelected] = useState('');

  const formattedNumber = (number) => {
    return number.toString().padStart(2, '0');
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Construir la URL con los valores actuales
      const url = `http://monet.cat:8080/product/${data['product'].productId}/availability?from_date=${selected[2]}-${formattedNumber(selected[1])}-${formattedNumber(selected[0])}&to_date=${selected[2]}-${formattedNumber(selected[1])}-${formattedNumber(selected[0])}&stock_needed=${stock}`;

      // Realizar la solicitud HTTP utilizando fetch
      const response = await fetch(url);

      // Verificar el estado de la respuesta
      if (response.ok) {
        // Obtener los datos de la respuesta
        const data = await response.json();
        
        // Manejar los datos recibidos
        console.log('Datos del servidor:', data);
        setAvailableHours(data.data[`${selected[2]}-${formattedNumber(selected[1])}-${formattedNumber(selected[0])}`]);
        
        // Aquí puedes realizar cualquier acción adicional con los datos recibidos, como actualizar el estado de tu componente con la respuesta del servidor.
      } else {
        // Manejar errores en la respuesta
        console.error('Error en la solicitud:', response.status);
      }
    } catch (error) {
      // Manejar cualquier error de la solicitud
      console.error('Error en la solicitud:', error);
    }
  };

  const addCart = () => {
    if(stock > 1){
      if (data) {
        // Actualizar precio a según las medias horas de más seleccionadas
      // const updatedProduct = { ...data };
      // updatedProduct.product.price += 2;
  
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          const updatedCart = [...parsedCart, data];
          setCart(updatedCart);
          sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
          const updatedCart = [data];
          setCart(updatedCart);
          sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        //
        navigate('/buyProgress');
      }
    }
  }

  const handleStockChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value > 0) {
      setStock(value);
    }
  };

  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <Select
            value={currentMonth}
            onChange={(event) => setCurrentMonth(event.target.value)}
          >
            {months.map((month, index) => {
              if (currentYear === currentYearValue && index < currentMonthIndex) {
                return null; // Deshabilitar meses anteriores al mes actual
              }
              return (
                <MenuItem key={month} value={index}>
                  {month}
                </MenuItem>
              );
              })}
          </Select>
          <Select
            value={currentYear}
            onChange={(event) => setCurrentYear(event.target.value)}
          >
            {years.map((year) => {
              if (year < currentYearValue) {
                return null; // Deshabilitar años anteriores al año actual
              }
              return (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              );
              })}
          </Select>
        </Col>
      </Row>
      <Table>
        <TableHead>
          <TableRow>
            {WEEKDAYS.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {weeks.map((week, weekIndex) => (
            <TableRow key={`week-${weekIndex}`}>
              {week.map((day, dayIndex) => {
                const isToday = day === todayNumber && currentMonth === currentMonthIndex && currentYear === currentYearValue;
                const isPreviousDay = currentYear === currentYearValue && currentMonth === currentMonthIndex && day < todayNumber;
                const isSelected = day === selectedDay;
                const circleStyle = {
                  borderRadius: '50%',
                  fontWeight: isToday || isSelected ? 'bold' : 'normal',
                  fontSize: isToday ? '32px' : '16px',
                  width: '24px',
                  height: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: isPreviousDay ? 'default' : 'pointer', // Deshabilitar el cursor en días anteriores al día actual
                  border: isPreviousDay ? '3px solid #808080' : isSelected ? '3px solid #1DFA75' : 'transparent', // Borde gris en días anteriores al día actual
                  backgroundColor: isPreviousDay ? '#e0e0e0' : isSelected ? 'rgba(29, 250, 117, 0.5)' : 'transparent', // Fondo gris transparente en días anteriores al día actual y verde transparente en días seleccionados
                  justifyContent: 'center'
                };
                return (
                <TableCell key={`day-${dayIndex}`} onClick={(event) => {
                  if (!isPreviousDay) {
                    setSelectedDay(day);
                  }
                }}>
                  {day > 0 && day <= daysInMonth ? (
                    <p style={circleStyle}>
                    {day}
                  </p>
                  ) : (
                    <div className="blank"></div>
                  )}
                </TableCell>
              )}
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Row>
        <Col>
        <input
        type="number"
        value={stock}
        placeholder="Stock"
        onChange={handleStockChange}
        min="1"
      />
      {stock <= 0 && (
        <p style={{ color: "red" }}>El stock debe ser mayor a 0</p>
      )}
        </Col>
        <Col>
        <Row>
        <label htmlFor="availableHoursSelect">Horas disponibles:</label>
        
        <Select
            value={hourSelected}
            onChange={(event) => setHourSelected(event.target.value)}
          >
            {availableHours.map((hourObj, index) => (
            <MenuItem key={index} value={hourObj.first}>
                  {hourObj.first}
                </MenuItem>
          ))}
          </Select>
        </Row>
        
        </Col>
      </Row>
      <Button onClick={addCart}>Reservar</Button>
    </Container>
  );
};