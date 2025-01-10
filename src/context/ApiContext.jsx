import React, { createContext, useContext, useState } from 'react';
import dayjs from "dayjs";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [originalData, setOriginalData] = useState(null);
  const [appleData, setAppleData] = useState(null);
  const [revenueValue, setRevenueValue] = useState([200000000000, 400000000000]);
  const [netIncomeValue, setNetIncomeValue] = useState([50000000000, 100000000000]);
  const [selectedYears, setSelectedYears] = useState(['2020', '2024']);
  const [rangeValue, setRangeValue] = useState([
    dayjs("2020", "YYYY"),
    dayjs("2024", "YYYY"),
  ]);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <ApiContext.Provider value={{ appleData, setAppleData, revenueValue, setRevenueValue, netIncomeValue, setNetIncomeValue, selectedYears, setSelectedYears, rangeValue, setRangeValue, originalData, setOriginalData, isDisabled, setIsDisabled }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
