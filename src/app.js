import React from 'react';
import {BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom';

//pages
import Home from './Pages/home/home';
import Sales from './Pages/Sales/sales'
import Header from './Pages/home/header/header';
import Footer from './Pages/home/footer/footer';

//css

const Pos = () =>{
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/home' exact>{Home}</Route>
                <Route path='/sales' exact>{Sales}</Route>
                {/* <Route path='/' exact>{Home}</Route>
                <Route path='/' exact>{Home}</Route>
                <Route path='/' exact>{Home}</Route> */}
                <Redirect to='/home'/>
            </Switch> 
            <Footer/>
        </Router>
    )
}

export default Pos;