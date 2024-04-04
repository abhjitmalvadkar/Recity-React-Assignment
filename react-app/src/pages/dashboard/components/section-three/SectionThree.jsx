import './SectionThree.css';
import Card from '../../../../shared/components/card/Card';

const SectionThree = () => {
  const values = [
    {
      id: 1,
      heading: 'Expenses (in rupees)',
      value: '50,000'
    },
    {
      id: 2,
      heading: 'Revenue (in rupees)',
      value: '1,20,000'
    },
    {
      id: 3,
      heading: 'Process Loss (MT)',
      value: 5
    },
    {
      id: 4,
      heading: 'Vehicle Trips',
      value: 10
    }
  ];
  
  return (
    <div className="section-one-wrapper">
      <div
        className="section-one-card pe-0 ps-0 pe-sm-2 col-lg-3 pe-xs-0 col-lg-4 col-md-6 col-sm-6 col-12"
      >
        <Card
          direction='vertical'
          key={values[0].id}
          heading={values[0].heading}
          value={values[0].value}
        />
      </div>
      <div
        className="section-one-card pe-0 ps-sm-2 pe-md-2 col-lg-3 col-lg-4 col-md-6 col-sm-6 pe-sm-0 col-12"
      >
        <Card
          direction='vertical'
          key={values[1].id}
          heading={values[1].heading}
          value={values[1].value}
        />
      </div>
      <div
        className="section-one-card pe-0 pe-sm-2 ps-md-0 ps-lg-2 col-lg col-md-6 col-sm-6 ps-sm-0 col-12"
      >
        <Card
          direction='vertical'
          key={values[2].id}
          heading={values[2].heading}
          value={values[2].value}
        />
      </div>
      <div
        className="section-one-card pe-0 ps-sm-2 col-lg col-md-6 col-sm-6 ps-sm-0 col-12"
      >
        <Card
          direction='vertical'
          key={values[3].id}
          heading={values[3].heading}
          value={values[3].value}
        />
      </div>
    </div>
  );
};

export default SectionThree;
