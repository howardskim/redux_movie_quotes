import React, {Component} from 'react';
import auth from '../hoc/auth';

class MovieQuotes extends Component{
    render(){
        // console.log('moviequotes props ', this.props)
        return(
            <div>
                <h1 className="center">Movie Quotes</h1>
                <p className="center">I been looking for your sweet and sour chicken ass</p>
            </div>
        )
    }
}

export default auth(MovieQuotes);