import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (WrappedComponent) {
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            const { auth, history } = this.props;
            if (!auth) {
                history.push('/');
            }
        }
        
        render () {
            console.log('auth component props ', this.props)
            return <WrappedComponent {...this.props}/>
        }   
    }
    function mapStateToProps(state){
        return{
            auth: state.user.auth
        }
    }
    return connect(mapStateToProps)(Auth);
}


//pass all the props with destructuring into the wrappedcomponent