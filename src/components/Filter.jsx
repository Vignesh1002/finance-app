import { Drawer, Slider } from "antd";
import { DatePicker } from "antd";
import { useApi } from "../context/ApiContext";

const { RangePicker } = DatePicker;

const Filter = ({onClose, open}) => {
    const { setAppleData, revenueValue, setRevenueValue, netIncomeValue, setNetIncomeValue, selectedYears, setSelectedYears, rangeValue, setRangeValue, originalData } = useApi();

    const applyChanges = () => {
        setAppleData(filteredData);
        onClose();
    }

    const filteredData = originalData.filter((item) => {
        const year = parseInt(item.date.split("-")[0], 10);
    
        const isDateInRange =
          year >= parseInt(selectedYears[0], 10) &&
          year <= parseInt(selectedYears[1], 10);
    
        const isRevenueInRange =
          item.revenue >= parseInt(revenueValue[0], 10) &&
          item.revenue <= parseInt(revenueValue[1], 10);

        const isNetIncomeInRange =
          item.netIncome >= parseInt(netIncomeValue[0], 10) &&
          item.netIncome <= parseInt(netIncomeValue[1], 10);
    
        return isDateInRange && isRevenueInRange && isNetIncomeInRange;
      });

    return (
        <div>
            <Drawer
            title={<p className="text-center text-primary font-black">Filter Data</p>}
            onClose={onClose}
            open={open}>
                <div>
                    <p className="text-primary font-black">Date Range:</p>
                    <div style={{ margin: "20px" }}>
                        <RangePicker
                            picker="year"
                            allowClear={false}
                            placeholder={["Start Year", "End Year"]}
                            value={rangeValue}
                            onChange={(dates, dateStrings) => {
                                setRangeValue(dates); // Update the value on selection
                                setSelectedYears(dateStrings); // Store the year strings
                            }}
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>
                <div>
                    <p className="text-primary font-black">Revenue:</p>
                    <div style={{ margin: "20px" }}>
                        <Slider
                            range
                            min={200000000000}
                            max={400000000000}
                            value={revenueValue}
                            onChange={(value) => setRevenueValue(value)}
                            tooltip={{ formatter: (val) => `${val}` }}
                        />
                        <div className="font-semibold">
                            Selected Range: <p className="font-extralight">${revenueValue[0]} - ${revenueValue[1]}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-primary font-black">Net Income:</p>
                    <div style={{ margin: "20px" }}>
                        <Slider
                            range
                            min={50000000000}
                            max={100000000000}
                            value={netIncomeValue}
                            onChange={(value) => setNetIncomeValue(value)}
                            tooltip={{ formatter: (val) => `${val}` }}
                        />
                        <div className="font-semibold">
                            Selected Range: <p className="font-extralight">${netIncomeValue[0]} - ${netIncomeValue[1]}</p>
                        </div>
                    </div>
                </div>
                <div className='p-2 bg-primary text-white rounded-lg font-semibold w-fit m-auto mt-[4rem]'>
                    <button onClick={applyChanges}>Apply Changes</button>
                </div>
            </Drawer>
        </div>
    )   
}

export default Filter;