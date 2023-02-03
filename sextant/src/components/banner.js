import "./Banner.css";
const Banner = (props) => {
  const { title } = props;
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
};
export default Banner;
