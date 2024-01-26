import { ResponsiveBar } from "@nivo/bar";

export function BarChartGraph(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", Sales: 6000 },
          { name: "Feb", Sales: 21000 },
          { name: "Mar", Sales: 3000 },
          { name: "Apr", Sales: 27000 },
          { name: "May", Sales: 8000 },
          { name: "Jun", Sales: 45000 },
          { name: "Jul", Sales: 9000 },
          { name: "Aug", Sales: 22000 },
          { name: "Sep", Sales: 32000 },
          { name: "Oct", Sales: 4000 },
          { name: "Nov", Sales: 30000 },
          { name: "Dec", Sales: 25000 },
        ]}
        keys={["Sales"]}
        indexBy="name"
        margin={{ top: 40, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 8,
          tickPadding: 8,
        }}
        gridYValues={8}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
              color: "#000",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

// axisLeft={{
//   tickSize: 0,
//   tickValues: 4,
//   tickPadding: 16,
// }}
// gridYValues={14}
