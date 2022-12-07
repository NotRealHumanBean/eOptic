import { useState, useEffect } from "react";
import React, { Component } from "react";
import OpticList from "./OpticList";
import OpticTemp from "./optic-template";

import OPTIC_DATA from '../OPTIC_DATA.json';

const filterOptics = (searchText, listOfOptics) => {
    if (!searchText) {
      return listOfOptics;
    }
    return listOfOptics.filter(({ optic_company }) =>
      optic_company.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  const data = OPTIC_DATA;

  function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [opticList, setOpticList] = useState(data);
  
  
    useEffect(() => {
      const Debounce = setTimeout(() => {
        const filteredOptics = filterOptics(searchTerm, data);
        setOpticList(filteredOptics);
      }, 300);
  
      return () => clearTimeout(Debounce);
    }, [searchTerm]);
  
  
  
    return (
      <div className="container">
        <OpticTemp optictemp={OpticTemp} />
    </div>

  
      
    );
  }
  
  export default Search;

  {/*
<div className="input-wrapper">
          <input
            autoFocus
            type="text"
            autoComplete="off"
            placeholder="Знайдіть потрібну оптику швидко"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

  <OpticList opticList={opticList} />
  <Optic optic={Optic} />
      < */}
      
    {/**/}