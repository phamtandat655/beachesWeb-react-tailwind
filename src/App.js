import { useState } from 'react';
import './App.css';
import BookVacations from './components/BookVacations';
import Footer from './components/Footer';
import ResortLayout from './components/ResortLayout';
import ShowImg from './components/ShowImg';
import VideoBg from './components/VideoBg';

function App() {
    const [showImg, setShowImg] = useState(false);
    const [orderImg, setOrderimg] = useState(0);

    return (
        <div className="App">
            {showImg && <ShowImg onClickShowImg={setShowImg} orderImg={orderImg} />}
            <VideoBg />
            <ResortLayout onClickShowImg={setShowImg} setOrderimg={setOrderimg} />
            <BookVacations />
            <Footer />
        </div>
    );
}

export default App;
