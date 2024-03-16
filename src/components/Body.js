import Card from "./Card";
import {useState, useEffect} from "react";
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

    //create a local state variable in react
    //modify the searchText wit he.target.value using useState
    // e.target.alue is whatever you write in the input box

    const[searchText, setSearchText] = useState("");
    const[restaurants, setRestuarants] = useState(restaurantList);

    //when you are rendering for the first time it will call the initial data
    // then after API call the data will be fetched from the API

    useEffect(()=>{
        getRestuarants();
    },[]);

    async function getRestuarants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        
        setRestuarants(json?.data?.cards[2]?.data?.data?.cards)
    
    }   
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