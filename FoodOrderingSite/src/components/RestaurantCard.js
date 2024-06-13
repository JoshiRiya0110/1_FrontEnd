const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating} = resData;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/27d43f8a2c1ca62704bb2dfd88d5b268"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>30 minutes</h4>
      </div>
    );
  };

  
  export default RestaurantCard;