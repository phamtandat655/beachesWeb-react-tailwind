import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center md:px-4 px-1 h-20 ">
            <h1 className="font-bold md:text-4xl text-2xl text-white">BEACHES.</h1>
            <ul className=" flex">
                <li className="md:p-5 p-1 text-white drop-shadow-md cursor-pointer">Home</li>
                <li className="md:p-5 p-1 text-white drop-shadow-md cursor-pointer">Destination</li>
                <li className="md:p-5 p-1 text-white drop-shadow-md cursor-pointer">Travel</li>
                <li className="md:p-5 p-1 text-white drop-shadow-md cursor-pointer">Views</li>
                <li className="md:p-5 p-1 text-white drop-shadow-md cursor-pointer">Book</li>
            </ul>
            <div>
                <FontAwesomeIcon icon={faSearch} className="text-white cursor-pointer" />
                <FontAwesomeIcon icon={faUser} className="md:ml-4 ml-2 text-white cursor-pointer" />
            </div>
        </div>
    );
}

export default Navbar;
