import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';

function ResortLayout({ onClickShowImg, setOrderimg }) {
    const handleClickShowImg = (e) => {
        setOrderimg(parseInt(e.target.name));
        onClickShowImg(true);
    };

    return (
        <div className=" max-w-[1240px] m-auto mt-20 mb-5">
            <h1 className=" text-5xl font-bold">All-inclusive Resort</h1>
            <p className=" text-1xl m-4">On the Caribbean's Best Beaches</p>
            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                <img
                    alt="link hinh bi loi :(("
                    src={borabora}
                    name="0"
                    onClick={handleClickShowImg}
                    className=" w-full h-full cursor-pointer object-cover md:col-span-3 col-span-2 row-span-2"
                />
                <img
                    alt="link hinh bi loi :(("
                    src={borabora2}
                    name="1"
                    onClick={handleClickShowImg}
                    className=" w-full h-full cursor-pointer object-cover"
                />
                <img
                    alt="link hinh bi loi :(("
                    src={keywest}
                    name="2"
                    onClick={handleClickShowImg}
                    className=" w-full h-full cursor-pointer object-cover"
                />
                <img
                    alt="link hinh bi loi :(("
                    src={maldives}
                    name="3"
                    onClick={handleClickShowImg}
                    className=" w-full h-full cursor-pointer object-cover"
                />
                <img
                    alt="link hinh bi loi :(("
                    src={maldives2}
                    name="4"
                    onClick={handleClickShowImg}
                    className=" w-full h-full cursor-pointer object-cover"
                />
            </div>
        </div>
    );
}

export default ResortLayout;
