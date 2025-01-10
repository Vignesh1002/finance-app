import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { useApi } from '../context/ApiContext';
import { Spin } from "antd";

const apiKey = import.meta.env.VITE_API_KEY;

const fetchApiData = async () => {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`);
  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData["Error Message"] || "An unknown error occurred";
    throw new Error(errorMessage);
  }
  return response.json();
};

const SortableTable = () => {
  const { appleData, setAppleData, setOriginalData, setIsDisabled } = useApi();
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "ascending" });
  const { data, isLoading, error } = useQuery({
    queryKey: ['appleData'],
    queryFn: fetchApiData
  });

  useEffect(() => {
    if (data) {
      setAppleData(data);
      setOriginalData(data);
      setIsDisabled(false);
    } else{
      setIsDisabled(true);
    }
  }, [data, setAppleData, setIsDisabled, setOriginalData]);

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...appleData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setAppleData(sortedData);
  };

  if (isLoading) return <div className="my-[4rem] text-center"><Spin size="large" /></div>;
  if (error) return <div className="my-[4rem] text-red-500 text-center">Error: {error.message}</div>;

  return (
    <div className="pt-4 mb-12">
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        <th
                        className="cursor-pointer px-4 py-2 text-white bg-primary font-semibold"
                        onClick={() => sortData("date")}
                        >
                        Date {sortConfig.key !== "date" && "↑↓"} {sortConfig.key === "date" ? (sortConfig.direction === "ascending" ? "↑" : "↓") : ""}
                        </th>
                        <th
                        className="cursor-pointer px-4 py-2 text-white bg-primary font-semibold"
                        onClick={() => sortData("revenue")}
                        >
                        Revenue {sortConfig.key !== "revenue" && "↑↓"} {sortConfig.key === "revenue" ? (sortConfig.direction === "ascending" ? "↑" : "↓") : ""}
                        </th>
                        <th
                        className="cursor-pointer px-4 py-2 text-white bg-primary font-semibold"
                        onClick={() => sortData("netIncome")}
                        >
                        Net Income {sortConfig.key !== "netIncome" && "↑↓"}{sortConfig.key === "netIncome" ? (sortConfig.direction === "ascending" ? "↑" : "↓") : ""}
                        </th>
                        <th
                        className="cursor-pointer px-4 py-2 text-white bg-primary font-semibold"
                        >
                        Gross Profit
                        </th>
                        <th
                        className="cursor-pointer px-4 py-2 text-white bg-primary font-semibold"
                        >
                        EPS
                        </th>
                        <th
                        className="cursor-pointer px-4 py-2 text-white bg-primary font-semibold"
                        >
                        Operating Income
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appleData?.map((row, index) => (
                        <tr
                        key={index}
                        className="bg-gray-100 even:bg-gray-200 text-center"
                        >
                        <td className="px-4 py-2">{row.date}</td>
                        <td className="px-4 py-2">${row.revenue.toLocaleString()}</td>
                        <td className="px-4 py-2">${row.netIncome.toLocaleString()}</td>
                        <td className="px-4 py-2">${row.grossProfit.toLocaleString()}</td>
                        <td className="px-4 py-2">${row.eps.toLocaleString()}</td>
                        <td className="px-4 py-2">${row.operatingIncome.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default SortableTable;
