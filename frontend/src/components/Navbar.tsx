import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex h-24 w-full items-center justify-between bg-yellow-500 px-24">
      <div className="aspect-square h-4/5">
        <img
          className="h-full object-cover"
          src="http://pinseriajaskolcza.000webhostapp.com/images/logo.png"
          alt="logo"
        />
      </div>
      <ul className="flex w-1/4 items-center justify-between">
        <Link to={'/'}>MENU</Link>
        <a href="#">O NAS</a>
        <Link to={'/order'} className="rounded-md bg-yellow-600 p-4">
          ZAMÓW TERAZ
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
