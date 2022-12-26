function Footer() {
    return (
        <div className=" h-36 bg-slate-300 mt-20">
            <div className=" flex justify-between items-center max-w-[1240px] mx-auto h-36">
                <div>
                    <p className=" font-bold text-white text-4xl">BEACHES.</p>
                </div>
                <div className="flex">
                    <a className=" text-xl px-5 md:px-9 md:text-2xl hover:text-slate-500" href="facebook.com">
                        <i className="fa-brands fa-facebook"></i>
                        <p className=" hidden md:block mt-1 text-lg">Facebook</p>
                    </a>
                    <a className=" text-xl px-5 md:px-9 md:text-2xl hover:text-slate-500" href="twitter.com">
                        <i className="fa-brands fa-twitter"></i>
                        <p className=" hidden md:block mt-1 text-lg">Twitter</p>
                    </a>
                    <a className=" text-xl px-5 md:px-9 md:text-2xl hover:text-slate-500" href="instagram.com">
                        <i className="fa-brands fa-instagram"></i>
                        <p className=" hidden md:block mt-1 text-lg">Instagram</p>
                    </a>
                    <a className=" text-xl px-5 md:px-9 md:text-2xl hover:text-slate-500" href="linkedin.com">
                        <i className="fa-brands fa-linkedin"></i>
                        <p className=" hidden md:block mt-1 text-lg">Linkedin</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
