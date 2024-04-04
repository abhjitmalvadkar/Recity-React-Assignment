import './PageNotFound.css';

export default function ErrorPage() {
  return (
    <div className="wrapper">
      <div className="heading">
        OOPs...
      </div>
      <div className="description">
        The page you are looking for does not exist.
      </div>
    </div>
  );
}
