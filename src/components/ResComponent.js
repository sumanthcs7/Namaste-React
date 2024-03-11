import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constants";

const ResComponent = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, id, name, cuisines, avgRating, sla, } = resData.info;
    return (
      <Link to={"/restaurants/"+id}>
       <div className=" rounded-lg h-96 w-40  bg-gray-100 m-2 my-2">
        <img
          className="res-logo h-40 rounded-lg"
          alt="res-logo"
          src={
            IMG_URL +
            cloudinaryImageId
          }
        ></img>
        <h3 className=" font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.slaString}</h4>
      </div>
      </Link>
     
    );
  };

  export default ResComponent;