
import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId } = resData?.info;
    return (
        <div className="res-card">
            <img
                alt="reslogo"
                src={
                    CDN_URL +
                    cloudinaryImageId
                }
            ></img>
            <h3>{name}</h3>
            <h4>Biryani,North Indian, Asian</h4>
            <h4>5 stars</h4>
        </div>
    );
};
export default RestaurantCard;