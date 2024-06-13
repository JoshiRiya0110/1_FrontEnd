# 1 Food Ordering App
/**
 * Header
 * ---Logo
 * ---Nav Items
 * Body
 * ---Search
 * ---RestaurantContainer
 * ---RestaurantCard
 * Footer
 * ---Copyright
 * ---Links
 * ---Address
 * ---Contact
 */

 # 2 React Hooks
 (Normal javascript utility functions)
 
 * useState() - super powerful state variables in react. Whenever state variable changes react will re-render the component. Never create these state variables outside the component, inside conditional statements and functions.

 * useEffect() - whenever the render cycle finishes it will quickly call the function that is passed into useEffect hook.
 -- if no dependency array - useEffect is called on every component render.
 -- if the dependency array is empty  -[] => useEffect is called on initial render(just once).
 -- if dependency array is [btnName] then it is called everytime btnName is updated