import {useState} from 'react';


function Cart(){
    const [MenuVisible, setISMenuVisible] = useState(false);

    const toggleMenu = () => {
      setISMenuVisible(!MenuVisible);
    }
    return(
        

        <li>
          
        <div className="relative inline-block">
          <button onClick={toggleMenu} className="relative text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-1 5h13m-9-5l4-8m4 8l1 5m-10 0a1 1 0 102 0m6 0a1 1 0 102 0" />
            </svg>
          </button>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            3
          </span>

          <div id="cartMenu" className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg ${MenuVisible ? '' : 'hidden'}`}>
            <div className="p-4">
              <p className="text-sm text-gray-700">Item 1</p>
              <p className="text-sm text-gray-700">Item 2</p>
              <p className="text-sm text-gray-700">Item 3</p>
            </div>
            <div className="border-t border-gray-200">
              <button className="w-full p-2 text-center text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-b-lg">
                Checkout
              </button>
            </div>
          </div>

        </div>
      </li>

    );
}

export default Cart;