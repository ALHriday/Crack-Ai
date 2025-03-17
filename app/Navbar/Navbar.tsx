import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="py-2 bg-teal-600 flex gap-2 justify-center items-center">
            <Link className='btn btn-sm' to='/'>Home</Link>
            <Link className='btn btn-sm' to='/about'>About</Link>
            <Link className='btn btn-sm' to='/welcome'>Welcome</Link>
            <Link className='btn btn-sm' to='/service'>Service</Link>
        </div>
    );
};

export default Navbar;