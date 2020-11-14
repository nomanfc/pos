import React from 'react';
import HomeContent from './homeContent';
import Table from './table/table';

//css
import './homeContent.css';

const Home =()=>{
    return(
        <div className="home-content-wrapper">
            <Table/>
            <HomeContent/>
        </div>
    )
}

export default Home;