import './SectionOne.css';
import Card from '../../../../shared/components/card/Card';

const SectionOne = () => {
  const values = [
    {
      id: 1,
      heading: 'Inward (MT)',
      value: 50
    },
    {
      id: 2,
      heading: 'Sorting (MT)',
      value: 70
    },
    {
      id: 3,
      heading: 'Baling (MT)',
      value: 40
    },
    {
      id: 4,
      heading: 'Lumping (MT)',
      value: 30
    },
    {
      id: 5,
      heading: 'Outward (MT)',
      value: 60
    }
  ];
  
  return (
    <div className="section-one-wrapper">
      <div
        className="section-one-card px-0 pe-sm-2 col-lg pe-xs-0 col-md-4 col-sm-6 col-12"
      >
        <Card
          key={values[0].id}
          heading={values[0].heading}
          value={values[0].value}
        />
      </div>
      <div
        className="section-one-card px-0 px-lg-2 ps-sm-2 pe-md-2 col-lg col-md-4 col-sm-6 col-12"
      >
        <Card
          key={values[1].id}
          heading={values[1].heading}
          value={values[1].value}
        />
      </div>
      <div
        className="section-one-card px-0 px-lg-2 pe-sm-2 ps-md-2 col-lg col-md-4 col-sm-6 col-12"
      >
        <Card
          key={values[2].id}
          heading={values[2].heading}
          value={values[2].value}
        />
      </div>
      <div
        className="section-one-card px-0 px-lg-2 ps-sm-2 pe-sm-0 ps-md-0 pe-md-2 ps-lg-2 col-lg col-md-6 col-sm-6 col-12"
      >
        <Card
          key={values[3].id}
          heading={values[3].heading}
          value={values[3].value}
        />
      </div>
      <div
        className="section-one-card px-0 ps-sm-0 ps-md-2 col-lg col-md-6 col-sm-12 col-12"
      >
        <Card
          key={values[4].id}
          heading={values[4].heading}
          value={values[4].value}
        />
      </div>
      
    </div>
  );
};

export default SectionOne;
