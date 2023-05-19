import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// Toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LanguageSwitcher() {
  const {t, i18n} = useTranslation("global");

  const onChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    toast.success(t("langChanged.tran1"));
  }

  useEffect(() => {
    for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
      const element = document.getElementsByClassName('lang')[index];
      if(element.value === i18n.language)
      element.setAttribute('selected', 'true');
    }
  })

  let location = useLocation();

    const bgHeader = () =>{
        if(location.pathname.startsWith('/alquiler')){
            return true
        }else{
            return false
        }
    } 

  return (
      <select onChange={onChangeLanguage} style={{ fontFamily: 'Montserrat', border: 'none', backgroundColor: bgHeader() ? '#DEEDFF' : 'white' }}>
        <option value="es" className="lang" style={{ fontFamily: 'Montserrat' }}>ES</option>
        <option value="en" className="lang" style={{ fontFamily: 'Montserrat' }}>EN</option>
        <option value="nl" className="lang" style={{ fontFamily: 'Montserrat' }}>NL</option>
      </select>
  );
  
  
}