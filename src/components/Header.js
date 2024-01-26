import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="flex border space-x-8 justify-between items-center py-2 px-2">
        <div className="flex space-x-4">
          <NavLink to='/' className="font-bold">Movies</NavLink>
          <NavLink to='/watchlist' className="font-bold">Watchlist</NavLink>
        </div>
    </header>
  )
}

export default Header;