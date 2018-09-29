/**
 * User: 709962401@qq.com（cyh）
 * Date: 2018/7/7
 * Time: 下午3:38
 *
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addFlashMessage} from "../actions/flashMessages";

export default function (ComposeComponent) {
    class Authenticate extends Component {
        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type:'danger',
                    text:'You need to login to access this page'
                });
                this.context.router.history.push('/')
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.context.router.history.push('/')
            }
        }

        render(){
            return (
                <ComposeComponent {...this.props}/>
            )
        }
    }

    Authenticate.propTypes ={
        isAuthenticated:PropTypes.bool.isRequired,
        addFlashMessage:PropTypes.func.isRequired
    };

    Authenticate.contextTypes = {
        router:PropTypes.object.isRequired
    }

    const mapStateToProps = (state)=>{
        return{
            isAuthenticated:state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps,{addFlashMessage})(Authenticate)
}