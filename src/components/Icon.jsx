import { Link } from "react-router-dom";

const Icon = (props) => {

  return (
    <div>
      <div className={props.IconClass}>
        <Link to={props.link}>
          <img src={props.IconPic} alt="Image" />
          
        </Link>
      </div>
    </div>
  );
};

export default Icon;