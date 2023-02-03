import "./Exhibit.css";

const Exhibit = (props) => {
  const { heading, children } = props;
  return (
    <div className="exhibit">
      <div className="exhibit-header">
        <h2>{heading}</h2>
      </div>
      <div className="exhibit-container">{children}</div>
    </div>
  );
};
export default Exhibit;
