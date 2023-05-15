import { TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { useState } from "react";
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

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <Button onClick={handlePrevMonth} className="w-25">{"<"}</Button>
        </Col>
        <Col>
          <Select
            value={currentMonth}
            onChange={(event) => setCurrentMonth(event.target.value)}
          >
            {months.map((month, index) => (
              <MenuItem key={month} value={index}>
                {month}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={currentYear}
            onChange={(event) => setCurrentYear(event.target.value)}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>

        </Col>
        <Col>
          <Button onClick={handleNextMonth} className="w-25">{">"}</Button>
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
              {week.map((day, dayIndex) => (
                <TableCell key={`day-${dayIndex}`} onClick={(event) => setSelectedDay(day)}>
                  {day > 0 && day <= daysInMonth ? (
                    <>
                      {day}
                      {day === selectedDay && (
                        <div style={{ backgroundColor: 'red' }}>
                          <div>*</div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="blank"></div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

