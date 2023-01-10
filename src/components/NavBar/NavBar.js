import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import petlogo from './petlogo.png';

const NavBar = () => {

    return (
        <div className="navbar bg-base-100 flex justify-evenly shadow-md shadow-slate-400">
            <div className="flex justify-evenly">
                <Link to={'/'}>
                    <li className="btn btn-ghost normal-case text-xl">INICIO</li>
                </Link>
            </div>

            <Link to={'/mascotas'}>
                <li className="btn btn-ghost rounded-lg">MASCOTAS</li>
            </Link>

            <Link to={`/category/alimentos`}>
                <li className="btn btn-ghost rounded-lg">Alimentos</li>
            </Link>

            <Link to={'/category/accesorios'}>
                <li className="btn btn-ghost">Accesorios</li>
            </Link>

            <Link to={'/contacto'}>
                <li className="btn btn-ghost rounded-lg">CONTACTO</li>
            </Link>

            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Buscar..." className="input input-bordered" />
                </div>
                <CartWidget></CartWidget>
                <div className="dropdown dropdown-end">
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={petlogo} />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default NavBar