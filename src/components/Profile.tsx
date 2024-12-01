import {useState,useEffect} from 'react';

function Profile(){

   const [isShow,setisShow] = useState(false);


   useEffect(()=>{
      console.log('UseEffect Profile');
   });


   useEffect(()=>{
      console.log('UseEffect Profile2');
   },[]);

   useEffect(()=>{
      console.log('UseEffect Profile3');
   },[isShow]);
   
   function mouseOver(){
      setisShow(true);
   }

   function mouseOut(){
      setisShow(false);
   }

   return(
    <li>
      <a onMouseOver={mouseOver} onMouseOut={mouseOut} href="#" className=" text-white text-xl font-semibold">Profile</a>
      { isShow && <p className='absolute'>Hello Mr...</p>}
    </li>
   );

}

export default Profile;