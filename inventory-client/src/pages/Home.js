import React from 'react';
import '../pages/Home.css';
import Accordion from '../components/Accordion'; // Adjusted the path to components directory

const Home = () => {
    return (
        <div className='container'>
            <img 
                src="https://dummyimage.com/600x250/000000/099ea1" 
                className="img-fluid" 
                alt="..."
            />
            <div className="App">
                <h1>Accordion Button Example</h1>
                <Accordion title="Accordion 1" content="This is the content of Accordion 1." />
            </div>
        </div>
    );
};

export default Home;
