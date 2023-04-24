import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {meses} from './../../utils/filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Flechas para cambiar de mes de uno en uno
import { faArrowLeft }  from '@fortawesome/free-solid-svg-icons';
import { faArrowRight }  from '@fortawesome/free-solid-svg-icons';

export function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Mes
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  // Año
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  
  // Mejor hago un array desde aquí y lo paso abajo
  const renderDay = (day) => {
    if (day === 0) {
      return <td key={day}></td>;
    } else {
      return <td key={day}>{day}</td>;
    }
  };

  return (
    <Container className='my-5'>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProgressBar now={50} style={{ height: '1vh' }} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <table className='w-100 my-5'>
          <thead>
            <tr>
              <th>
                <Button onClick={handlePrevMonth} style={{ color: '#80ACE0', backgroundColor: 'transparent', borderColor: '#80ACE0' }} >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
              </th>
              <th colSpan="7" className='text-center'>
                {meses[currentMonth]} {currentYear}
              </th>
              <th>
                <Button onClick={handleNextMonth} style={{ color: '#80ACE0', backgroundColor: 'transparent', borderColor: '#80ACE0' }}>
                  <FontAwesomeIcon icon={faArrowRight}  />
                </Button>
              </th>
            </tr>
            <tr className='text-center'>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: getDaysInMonth(currentMonth, currentYear) }, (_, i) =>
              i + 1
            ).map((day, index) => {
              if (index % 7 === 0) {
                return <tr key={day}>{renderDay(day)}</tr>;
              } else {
                return renderDay(day);
              }
            })}
          </tbody>
        </table>
        </Col>
      </Row>
    </Container>
  );
}

