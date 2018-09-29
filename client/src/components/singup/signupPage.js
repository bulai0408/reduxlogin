/**
 * User: 709962401@qq.com（cyh）
 * Date: 2018/6/27
 * Time: 下午10:36
 *
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userSignupRequest, isUserExists} from "../../actions/signupActions";
import {addFlashMessage} from "../../actions/flashMessages";

import SignupForm from './SingupForm'

class SignupPage extends Component {
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        addFlashMessage: PropTypes.func.isRequired,
        isUserExists: PropTypes.func.isRequired
    }

    render() {
        const {addFlashMessage, userSignupRequest, isUserExists} = this.props;
        return (
            <div className='row'>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm
                        isUserExists={isUserExists}
                        addFlashMessage={addFlashMessage}
                        userSignupRequest={userSignupRequest}
                    />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default connect(null, {userSignupRequest, addFlashMessage, isUserExists})(SignupPage);