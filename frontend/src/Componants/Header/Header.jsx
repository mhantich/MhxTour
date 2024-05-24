import React,{useContext, useRef} from 'react';

import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import "./Header.css"
import { AuthContext } from '../../context/AuthContext';
function Header() {
 
  const {user,dispatch}=useContext(AuthContext)
  const navigate = useNavigate()
  const refmenu = useRef(null)
  const toggleMenu =()=>{
      refmenu.current.classList.toggle('show')
     
  }
  const navLinks = [
    {  
      path: "/",
      display: "Home"
    },
    {  
      path: "/about",
      display: "About"
    },
    {  
      path: "/tour",
      display: "Tour"
    },
  ];
const handleLoigout=async()=>{
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/logout`,{
    method:'get',
    credentials:'include'
  },           
  );
  const result = await res.json();
  if (res.ok) {
    dispatch({type:'LOGOUT'})
    alert(result.messges)
    navigate('/')
  }

}
  return (
    <div className='nav'>
    
       <div className='navBar '>
            <div className='logo'>
               <img src={logo} width={"100px"} alt="" />
            </div>
           <div className='menu ' ref={refmenu}>
                    <div className='close-menu ' >
                    <svg  onClick={toggleMenu} style={{width:"33px",height:'33px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fafafa"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>

                    </div>
                    <ul className='navbar-list'>
                                {navLinks.map((item, index) => (
                                <li className="nav__item" key={index}>
                            <NavLink to={item.path} className={navClass=>navClass.isActive?'active__link':''}>{item.display}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className='menu-typo'>
                        <p> consectetur adipisicing elit <br /> Soluta natus culpa ipsum, obcaecati amet ea facere animi consectetur dignissimos earum repellat porro velit,<br /> quam nihil nemo hic ipsa molestias cumque?</p>
                    </div>
                    <div className='menu-logo'>
                            <img src={logo} alt="" />
                    </div>
             </div>
             <div className=' xf navbar-last-child gap-1'>  
                    { user ? <div  className='d-flex gap-1 firt'>
                        <p>{user?.username}</p>
                    <button onClick={handleLoigout} className='btn btn_regers' > <Link to='/login' className=''>Logout</Link></button> </div> 
                    :
                    <div className='d-flex gap-1'>
                    <button  className='btn btn_login' >  <Link to='/login' className=''>Login</Link></button>
                    <button  className='btn btn_regers' > <Link to='/regester'>regester</Link> </button>
                    </div>
                    

                }
             </div>
          
                       
            <div className="open-menu" onClick={toggleMenu}>
                 <svg className='svg' style={{width:'25px',height:"25px",marginTop:'4px',color:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            </div>
         
            </div>


</div>
  );
}

export default Header;
