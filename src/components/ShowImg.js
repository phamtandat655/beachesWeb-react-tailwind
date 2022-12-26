import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';

function ShowImg({ onClickShowImg, orderImg }) {
    const imgArr = [borabora, borabora2, keywest, maldives, maldives2];
    const [indexImg, setIndexImg] = useState(orderImg);

    const handleHideImg = (e) => {
        if (e.target.value === e.currentTarget.value) {
            onClickShowImg(false);
        }
    };

    const handleNext = (e) => {
        if (indexImg >= imgArr.length - 1) {
            // vì state trễ hơn 1 số
            setIndexImg(-1);
        }
        e.stopPropagation();
        setIndexImg((prev) => prev + 1);
    };

    const handlePrev = (e) => {
        if (indexImg <= 0) {
            // vì state trễ hơn 1 số
            setIndexImg(imgArr.length);
        }
        e.stopPropagation();
        setIndexImg((prev) => prev - 1);
    };

    return (
        <div
            className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-10"
            onClick={handleHideImg}
        >
            <button>
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className=" absolute p-2 text-3xl left-4 md:text-5xl text-white top-1/2 md:left-14"
                    onClick={handlePrev}
                />
            </button>
            <img
                className=" w-3/4 h-5/6 object-cover rounded-md"
                alt="anh loi :(("
                src={imgArr[indexImg]}
                onClick={(e) => e.stopPropagation()}
            />
            <button>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" absolute p-2 text-3xl right-4 md:text-5xl text-white top-1/2 md:right-14"
                    onClick={handleNext}
                />
            </button>
        </div>
    );
}

export default ShowImg;
