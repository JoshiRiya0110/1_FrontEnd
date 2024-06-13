import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    //powerful state variables--whenever state variables upadte, react triggers a reconciliation cycle(re-renders the component)
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText,setSearchText] = useState("");


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
        setFilteredRestaurants(data);
    }


    //conditional rendering -- if isLoading is true then run shimmer ui else run the actual code
    return isLoading?<Shimmer/>:(
      <div className="body">
        <div className="filter">

            <div className="search">
                <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />

                <button 
                    className="search-btn" 
                    onClick={()=>{
                        //filter the restaurant cards and update the UI
                        const filteredRestaurant = listOfRestaurants.filter((res)=>
                        res.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant);
                    }}>
                        Search
                </button>
            </div>
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
              filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
          }
        </div>
      </div>
    );
  };

  export default Body;