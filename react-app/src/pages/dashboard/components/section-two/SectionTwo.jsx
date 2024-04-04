import './SectionTwo.css';
import Graph from '../graph/Graph';
import AttendanceTable from '../attendance-table/AttendanceTable';

const SectionTwo = () => {
  const chartData = [
    { name: "Material 1", inward: 10, outward: 20 },
    { name: "Material 2", inward: 45, outward: 30 },
    { name: "Material 3", inward: 40, outward: 30 },
    { name: "Material 4", inward: 50, outward: 40 }
  ];
  
  const staffData = [
    { Name: "Charlie Tornado", Present: true },
    { Name: "Felix Firestorm", Present: true },
    { Name: "Vinny Vortex", Present: false },
    { Name: "Frankie Flicker", Present: true },
    { Name: "Bonnie Blaze", Present: true },
    { Name: "Nina Nebula", Present: true },
    { Name: "Marina Mirage", Present: false },
    { Name: "Jack Sparkes", Present: false },
  ]
  
  return (
    <div
      className="section-two-wrapper flex-wrap"
    >
      <div className="h-100 col-md-7 col-12 pe-md-4">
        <Graph
          data={chartData}
          title="Material Data"
        />
      </div>
      <div className="h-100 col-md-5 col-12 ps-md-4">
        <AttendanceTable
          data={staffData}
          headers={["Staff", "Present", "Absent"]}
        />
      </div>
    </div>
  );
};

export default SectionTwo;
