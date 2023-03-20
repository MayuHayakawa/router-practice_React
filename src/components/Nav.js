import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <Link>
      <nav className='flex justify-around items-center h-20 bg-gray-500 text-white'>
          <h3>Logo</h3>
          <ul className='w-2/4 flex justify-around items-center list-none'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
          </ul>
      </nav>
    </Link>
  )
}

export default Nav

// function Nav() {
//   return (
//     <nav>
//         <h3>Logo</h3>
//         <ul className='nav-links'>
//             <li>About</li>
//             <li>Shop</li>
//         </ul>
//     </nav>
//   );
// }

// export default Nav;