import React from "react";
import PropTypes from 'prop-types';
import { Field, reduxForm } from "redux-form";
import { TextField } from "redux-form-material-ui";
import RaisedButton from "material-ui/RaisedButton";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import validate from "./validate";

export const SignUpFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <form onSubmit={handleSubmit} className="form">
        <div className="fild">
          <Field
            name="email"
            type="email"
            hintText="Email"
            floatingLabelText="Email"
            component={TextField}
            label="email"
          />
        </div>
        <div className="fild">
          <Field
            name="password"
            type="password"
            hintText="Password"
            floatingLabelText="Password"
            component={TextField}
            label="password"
          />
        </div>
        <div className="fild">
          <Field
            name="confPassword"
            type="password"
            hintText="Confirm Password"
            floatingLabelText="Confirm Password"
            component={TextField}
            label="confPassword"
          />
        </div>
        <div className="btn_grope">
          <RaisedButton type="submit" label="next" primary={!0} />
        </div>
      </form>
    </ReactCSSTransitionGroup>
  );
};

SignUpFormFirstPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: "signup",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignUpFormFirstPage);
