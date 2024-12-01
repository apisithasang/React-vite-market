import Cart from "./Cart";
import Profile from "./Profile";
import Logo from "./Logo";
function AppHeader() {


    return (

      <nav className="bg-gradient-to-r from-green-400 to-green-500 drop-shadow-lg shadow-green-400/50 p-4 ">
        <div className="container m-auto flex justify-between item-center">

            <Logo />

            <ul className="flex space-x-4">
       
              <Cart />
              <Profile />

              
             
              
            </ul>
          </div> 
          
              
      </nav>


   
    );
  }
  
 export default AppHeader; 