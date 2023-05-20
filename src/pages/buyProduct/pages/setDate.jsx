import { TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Select, MenuItem } from "@material-ui/core";
import { set } from "lodash";

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
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

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
  
  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const [stock, setStock] = useState(0);
  const [availableHours, setAvailableHours] = useState([]);
  
  return (
    <Container className="mt-5">
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
      <div>
        <p>Stock: {stock}</p>
        <p>Horas disponibles: {availableHours.join(', ')}</p>
      </div>
    </Container>
  );
};

// {day === todayNumber && (
//   <div style={{ backgroundColor: 'red' }}>
//     <div>*</div>
//   </div>
// )}