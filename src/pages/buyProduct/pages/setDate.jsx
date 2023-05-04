import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';

// Calendario para seleccionar el dia, en el que debe haber información sobre el estado de los productos por dia
// A continuación, se abre el siguiente formulario de selección horaria SOLO LAS DISPONIBLES

export const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]); // ???

  // console.log(value);
  // Wed Apr 12 2023 15:02:42 GMT+0200 (hora de verano de Europa central)

  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        // mask='____/__/__'
        variant='static'
        orientation='landscape'
        value={value}
        disablePast
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => {
          <TextField {...params} />;
        }}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;

          return (
            <Badge
              key={day.toString()}
              overlap='circular'
              badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};
