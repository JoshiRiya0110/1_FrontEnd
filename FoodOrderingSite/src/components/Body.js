import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetchData();
            setIsLoading(false);
        },1000);
    }, []);


    const fetchData = () =>{
        const data = resObj;
        setListOfRestaurants(data);
    }

    // let val = listOfRestaurants.length;
    // console.log(val);


    //conditional rendering
    if(isLoading){
        return <Shimmer/>; //shimmer ui should be here
    }

    return (
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