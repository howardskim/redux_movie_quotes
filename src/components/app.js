import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import MovieQuotes from './movie_quotes';
import About from './about';
import SecretList from './secret_list';
import SignUp from './sign_up';
import auth from '../hoc/auth';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact path="/" component ={Home} />
            <Route path = "/about" component = {About} />
            <Route path ="/secret-list" component ={auth(SecretList)} />
            <Route path="/movie-quote" component = {MovieQuotes} />
            <Route path="/sign-up" component={SignUp} />
        </div>
        {/* <MovieQuotes quote="hellooooooooooo"/> */}
    </div>
);

export default App;
