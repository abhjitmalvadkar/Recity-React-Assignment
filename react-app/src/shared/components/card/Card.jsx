import './Card.css';

export default function Card(props) {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className={`card-heading ${props.direction}`}>{props.heading}</div>
        <div className="card-value">{props.value}</div>
      </div>
    </div>
  )
}
