import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import videoSrc from '../assets/beachVid.mp4';
import Navbar from './Navbar';

function VideoBg() {
    return (
        <div className="w-full h-screen relative">
            <Navbar />
            <video className="w-full h-full object-cover" src={videoSrc} muted loop autoPlay />

            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-6/12">
                <h1 className="text-white text-3xl font-bold drop-shadow-md">First Class Travel</h1>
                <h2 className="text-white text-2xl font-bold mt-2 drop-shadow-md">Top 1% Locations Worldwide</h2>
                <div className="relative w-auto mt-3">
                    <input
                        type="text"
                        placeholder="Search destination..."
                        className="w-full p-3 rounded-xl drop-shadow-md"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute top-2/4 -translate-y-2/4 right-1 text-white text-2xl bg-lime-300 p-2 rounded-xl cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoBg;
