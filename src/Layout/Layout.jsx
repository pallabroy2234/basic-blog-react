import {useEffect, useState} from "react";
import {postCategories} from "../API_Request/APIRequest";
import {NavLink} from "react-router-dom";

const Layout = ({children}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await postCategories();
      setCategories(res);
    })();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className='fixed top-0 z-50 shadow-sm navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
              </svg>
            </label>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <NavLink to='/'>হোম </NavLink>
              </li>
              {categories.map((category, index) => {
                return (
                  <li key={index}>
                    <NavLink to={"/byCategory/" + category.id}>{category.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className='text-xl normal-case btn btn-ghost'>ডেইলি নিউজ </a>
        </div>
        <div className='hidden navbar-center lg:flex'>
          <ul className='px-1 menu menu-horizontal'>
            <li>
              <NavLink to='/'>হোম </NavLink>
            </li>
            {categories.map((category, index) => {
              return (
                <li key={index}>
                  <NavLink to={"/byCategory/" + category.id}>{category.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
