import Card from "./Card";
import {useState} from "react";
import { restaurantList } from "../config";


const filteredRestuarants=(searchText)=>{
    const data = restaurantList.filter((restaurant)=>{
        return restaurant.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    return data;
};

const Body=()=>{
    const[searchText, setSearchText] = useState("");
    const[restaurants, setRestuarants] = useState(restaurantList);
    return(
        <>
            <div className="search-box">
            <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input 
             type = "text"
             placeholder="search"
             className="search-input"
             onChange={(e)=>setSearchText(e.target.value)}
             value={searchText}
            />
            <button
            className="search-btn"
            onClick={()=>{
                const data = filteredRestuarants(searchText);
                setRestuarants(data);
            }}
            >
            Search
            </button>
            </form>
            </div>
            <div className="restuarant-list">
            {restaurants.map((restaurant)=>{
                return(
                    <Card {...restaurant.data}/>
                );
            })}
           
            </div>
        </>
    );
};

export default Body;