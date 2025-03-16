import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div className="py-2 bg-teal-600 flex gap-2 justify-center items-center">
            <Link className='btn btn-sm' to='/'>Home</Link>
            <NavLink className='btn btn-sm' to='/about'>About</NavLink>
            <NavLink className='btn btn-sm' to='/welcome'>Welcome</NavLink>
            <NavLink className='btn btn-sm' to='/service'>Service</NavLink>
        </div>
    );
};

export default Navbar;