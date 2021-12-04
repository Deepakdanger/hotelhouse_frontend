// import React, { useState, useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// import Displayhouses from '../components/Displayhouse';

// const Test = () => {

//   const [houses, setHouses] = useState([]);

//   const url = 'http://localhost:3000/houses';

//   // const dispatch = useDispatch();

//   const dataChange = (data) => {
//     setHouses(data);
//   };

//   useEffect(() => {
//     fetch(url,{
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);
//         console.log(houses);
//         dataChange(data);
//       },
//       () => {

//       });
//   }, []);

//   const selectedHouse = (ele) =>{
//     console.log(ele);
//     console.log(url +'/'+ele.id);
//     fetch((url+'/'+ele.id),{
//       method: 'DELETE',
//       data: { ele },
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data,'hello');
//       },
//       (e) => {console.log(e)});
//   };

//   const Housetile = houses.map((ele) => (<Displayhouses key={`ele-${ele.id}`} ele={ele} selecthouse={() => selectedHouse(ele)} />));

//   return (
//     <div className="meals">
//       <p className="meals_title">
//         List of Houses :
//       </p>
//       <div className="meals_discription">
//         {Housetile}
//       </div>
//     </div>
//   );
// };

// export default Test;
