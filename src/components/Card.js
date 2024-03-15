import "../App.css";
import { IMAGE_CDN_URL } from "../config";

const Card=(
    {
    name,
    cloudinaryImageId, 
    area, 
    cuisines, 
    lastMileTravelString, 
    costForTwoString, 
    avgRating,
    })=>{
    return(
        <>
        <div className="card-details">
            <div className="card">
                <img src={ IMAGE_CDN_URL + cloudinaryImageId}/>
                <div className="ratings">
                    <p>
                        <strong>{name}</strong>
                    </p>
                </div>
                <small>{cuisines.join(",")}</small>  
             <p
             style={{
                margin : "0",
                display : "flex",
                flexDirection : "column",
                justifyContent : "space-around",
             }}>
             <small>{area}</small>
                <small
                style={avgRating>3?{color : "green"}:{color : "red"}}>{avgRating}</small>
                <small>{costForTwoString}</small>
                <small>{lastMileTravelString}</small>
                </p>
            </div> 
        </div>
        </>
    );
}

export default Card;