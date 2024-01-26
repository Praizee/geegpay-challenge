import { BarChart, Card, Title } from "@tremor/react";

const chartdata5 = [
  { date: "Jan", Sales: 6000 },
  { date: "Feb", Sales: 21000 },
  { date: "Mar", Sales: 3000 },
  { date: "Apr", Sales: 27000 },
  { date: "May", Sales: 8000 },
  { date: "Jun", Sales: 45000 },
  { date: "Jul", Sales: 9000 },
  { date: "Aug", Sales: 22000 },
  { date: "Sep", Sales: 32000 },
  { date: "Oct", Sales: 4000 },
  { date: "Nov", Sales: 30000 },
  { date: "Dec", Sales: 25000 },
];

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  return (
    <div className="w-max rounded-tremor-default text-white dark:text-[#090C2C] bg-[#090C2C] dark:bg-white p-2 shadow-tremor-dropdown">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="font-medium text-tremor-content-emphasis">
              ${category.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CustomBarChart = () => {
  return (
    <>
      <BarChart
        className="h-72 mt-4"
        data={chartdata5}
        index="date"
        categories={["Sales"]}
        colors={["blue"]}
        yAxisWidth={60}
        customTooltip={customTooltip}
      />
    </>
  );
};

export default CustomBarChart;
