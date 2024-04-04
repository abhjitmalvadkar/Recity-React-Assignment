import './FiltersSection.css';

export default function FilterSection() {
  return (
    <div
      className="filter-section-wrapper"
    >
      <div className="left-section">
        <div className="filter-icon">
          <i className="fa fa-filter"
             aria-hidden="true"></i>
        </div>
        <div
          className="text"
        >
          Mathura
        </div>
      </div>
      <div className="right-section">
        <div className="filter-icon">
          <i className="fa fa-calendar"
             aria-hidden="true"></i>
        </div>
        <div
          className="text"
        >
          Today
        </div>
      </div>
    </div>
  )
}
