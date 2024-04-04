import './Dashboard.css';
import FilterSection from '../components/filters-section/FIltersSection';
import SectionOne from '../components/section-one/SectionOne';
import SectionThree from '../components/section-three/SectionThree';
import SectionTwo from '../components/section-two/SectionTwo';

export default function Dashboard() {
  return (
    <div
      className="dashboard-screen-wrapper"
    >
      <FilterSection/>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}
