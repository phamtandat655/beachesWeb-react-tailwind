import { faEarth, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

function BookVacations() {
    const [hour, setHour] = useState(11);
    const [minute, setMinute] = useState(59);
    const [second, setSecond] = useState(59);

    let interval = useRef();

    useEffect(() => {
        const startTimer = () => {
            let h = hour;
            let m = minute;
            let s = second;

            interval.current = setInterval(() => {
                if (h === 0 && m === 0 && s === 0) {
                    h = 0;
                    m = 0;
                    s = 0;
                } else if (s !== 0) {
                    s--;
                } else if (m !== 0 && s === 0) {
                    s = 59;
                    m--;
                } else if (h !== 0 && m === 0) {
                    m = 60;
                    h--;
                }

                if (h === 0 && m === 0 && s === 0) {
                    // Stop Timer
                    setHour(0);
                    setMinute(0);
                    setSecond(0);
                    clearInterval(interval.current);
                } else {
                    // Update Timer
                    setHour(h);
                    setMinute(m);
                    setSecond(s);
                }
            }, 1000);
        };
        startTimer();
    }, []);

    return (
        <div className="max-w-[1240px] mx-auto mt-20 mb-14 px-3 md:grid md:grid-cols-6 gap-2">
            <div className="col-span-4">
                <h2 className="font-bold text-3xl">LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className="py-4 text-left">
                    Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at BEACHES
                    Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite
                    beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao, feature
                    unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water
                    sport, including complimentary green fees at our golf resorts and certified scuba diving at most
                    resorts. If you are planning a wedding, BEACHES is the leader in Caribbean destination weddings and
                    honeymoon packages.
                </p>
                <div className="flex justify-between mt-3">
                    <div className="flex basis-2/4 px-2">
                        <button>
                            <FontAwesomeIcon icon={faHeadphones} className="text-5xl" />
                        </button>
                        <div className="px-4">
                            <h3 className="font-bold text-2xl">LEADING SERVICE</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className="flex basis-2/4 px-2">
                        <button>
                            <FontAwesomeIcon icon={faEarth} className="text-5xl" />
                        </button>
                        <div className="px-4">
                            <h3 className="font-bold text-2xl">LEADING SERVICE</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-2 w-full">
                <div className="border-2 border-gray-200 border-solid p-3 mb-3 md:-mt-5">
                    <p className="font-bold">GET AN ADDITIONAL 10% OFF</p>
                    <p className="font-bold my-1">{`${hour}h : ${minute}p : ${second}s`}</p>
                    <button className="mt-2 p-2 bg-black text-white">BOOK NOW AND FREE</button>
                </div>
                <div>
                    <p className="text-left font-bold my-1">Destination</p>
                    <select className="border rounded-md p-2 w-full">
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div>
                    <p className="text-left font-bold my-1">Check-in</p>
                    <input type="date" className="border rounded-md p-2 w-full" />
                </div>
                <div>
                    <p className="text-left font-bold my-1">Check-out</p>
                    <input type="date" className="border rounded-md p-2 w-full" />
                </div>
            </div>
        </div>
    );
}

export default BookVacations;
