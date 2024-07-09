/*

component are the function whose first letter is capital
*/
// export let App =()=> {
// return(
//   <div>hello i am app component</div>
// )
// };




// export let Sum =()=> {
//   let a=12;
//   let b=3;
//   let summ  = a+b;
//   if(summ===15){
//     return(
//       <div>hiiiiiiiiiiiiiik</div>
//     )
//   }else{
//   return(
//      <div>{summ }</div>
    
//   )
//   }
// };





import { Details } from "../Details";
import { Fatherdetails } from "./Fatherdetail";

export let App = () =>{
  return(
    <div>
      <Details name="bishwash" address= "Butwal" age={20}> </Details>
      <Fatherdetails name="sukdev" age={55} wife="radhika"></Fatherdetails>
      <button
        onClick={() =>{
          console.log("button is clicked");
        }}
        >
          Plz click me
        </button>
        
    </div>
  );
};












