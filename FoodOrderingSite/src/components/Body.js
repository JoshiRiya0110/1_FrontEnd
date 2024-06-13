import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    //powerful state variables
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //whenever the render cycle finishes it will quickly call the function that is passed into it 
    useEffect(()=>{
        setTimeout(()=>{
            fetchData();
            setIsLoading(false);
        },1000);
    }, []);


    //Loading actual mock data
    const fetchData = () =>{
        const data = resObj;
        setListOfRestaurants(data);
    }


    //conditional rendering -- if isLoading is true then run shimmer ui else run the actual code
    return isLoading?<Shimmer/>:(
      <div className="body">
        <div className="filter">
            <button 
            className="filter-btn" 
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res) =>res.avgRating > 4
                );
                setListOfRestaurants(filteredList);
            }}>
                Top Rated Restaurant
            </button>

        </div>
        <div className="res-container">
          {
              listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
          }
        </div>
      </div>
    );
  };

  export default Body;