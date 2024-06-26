import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchNavSidebar() {
  const [sidebar, setSidebar] = React.useState(false);

  const mobileNavRef = React.useRef(null);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  const handleOutsideClick = (event) => {
    if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
      setSidebar(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, []);


  const user = useSelector(state => state.user); 
  const isLoggedIn = !!user.value; 

  const handleLogout = () => {
    localStorage.removeItem('user');

    toast.warn('Logout Successful', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  



  return (
    <>
    
      <div>
    <AiOutlineMenu onClick={handleSidebar} className='text-3xl relative' />
     
      </div>
      {
        sidebar && (
          <div className={`absolute right-0 top-0  w-full h-full`} >
          <div  ref={mobileNavRef} className={`flex flex-col bg-white`}>
          <header className="flex justify-between items-center p-4 shadow-md">
             <img src="https://i.ibb.co/DCXXwd1/logo.png" alt="" srcset="" />
            
            <button onClick={handleSidebar} className="text-gray-400  text-4xl focus:outline-none">
              &times;
            </button>
          </header>
    
          <div className="p-4">
            <div className="flex items-center border rounded-md shadow-sm">
              <input type="text" className="flex-grow p-2 outline-none" placeholder="Search for products..." />
              
            </div>
          </div>
    
          <div className="p-4 flex-grow">
            <nav>
              
              <ul className="space-y-2">
                <li onClick={handleSidebar}>
                  <Link to="/" className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                    Home
                   
                  </Link>
                </li>
                <li onClick={handleSidebar} >
                  <Link to="/products"  className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                  Products
                 
                  </Link>
                </li>

                <li onClick={handleSidebar} >
                  <Link to="/about"  className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                  About
                   
                  </Link>
                </li>
                <li onClick={handleSidebar}>
                  <Link to="/contact"  className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                  Contacts
                   
                  </Link>
                </li>
               
              </ul>
            </nav>
          </div>
    
          <div className="p-4">
            {
              !isLoggedIn ? 
              <button onClick={handleLogout} className="w-full p-2 text-white bg-blue-500 rounded-md shadow-sm focus:outline-none">Logout</button>
              :
              <button className="w-full p-2 text-white bg-blue-500 rounded-md shadow-sm focus:outline-none">Login</button>
            }
          </div>
        </div>


          </div>
        )
      } 
    
    </>
  
  );
}
