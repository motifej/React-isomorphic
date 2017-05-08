import React, { Component } from "react";
import { object } from "prop-types";
import { Link } from "react-router";
import {reset} from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import injectTapEventPlugin from "react-tap-event-plugin";
import * as appActions from '../actions'
import './style.scss'

injectTapEventPlugin();

class App extends Component {
  
  static defaultProps = {
    children: null,
  }
  
  static propTypes = {
    children: object // eslint-disable-line react/forbid-prop-types
  };

  state = {}

  render() {
    const { children } = this.props;
    return (
      <div className="app">
        {
          children
            ? React.cloneElement( children, { ...this.props })
            : <Link className="custom_btn" to="signup">SignUp</Link>
        }
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  dispatch => ({ actions: bindActionCreators({...appActions, reset}, dispatch) })
)(App)