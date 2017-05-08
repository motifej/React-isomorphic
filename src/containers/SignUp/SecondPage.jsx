import React from "react"
import PropTypes from "prop-types"
import { Field, reduxForm } from "redux-form"
import { TextField, AutoComplete } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import { Tabs, Tab } from 'material-ui/Tabs'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem' // eslint-disable-line
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import validate, { between, numberX } from "./validate"

const renderTabs = ({ input, ...custom }) => ( // eslint-disable-line
  <Tabs {...custom} onChange={value => input.onChange(value)} />
);

const SignUpFormSecondPage = props => {
  const { handleSubmit, prevPage } = props;
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <form onSubmit={handleSubmit} className="form">
        <div className="birthday">
          <Field
            name="day"
            type="text"
            hintText="day"
            floatingLabelText="day"
            component={TextField}
            normalize={between(1, 31)}
            label="day"
          />
          <Field
            name="month"
            type="text"
            hintText="month"
            floatingLabelText="month"
            component={TextField}
            normalize={between(1, 12)}
            label="month"
          />
          <Field
            name="year"
            type="text"
            hintText="year"
            floatingLabelText="year"
            component={TextField}
            normalize={numberX(4)}
            label="year"
          />
        </div>
        <Field name="sex" component={renderTabs}>
          <Tab label="MALE" value="male" />
          <Tab label="FEMALE" value="female" />
          <Tab label="UNSPECIFIED" value="unspecified" />
        </Field>
        <Field
          name="referral"
          fullWidth
          component={AutoComplete}
          floatingLabelText="How did you find us?"
          openOnFocus
          dataSourceConfig={{ text: "name", value: "name" }}
          dataSource={[
            { id: 0, name: "Facebook" },
            { id: 1, name: "Yelp" },
            { id: 2, name: "TV Ad" },
            { id: 3, name: "Friend" },
            { id: 4, name: "Other" }
          ]}
        />
        <div className="btn_grope">
          <FlatButton
            label="Previous"
            onTouchTap={prevPage}
            style={{ marginRight: 12 }}
          />
          <RaisedButton type="submit" label="next" primary />
        </div>
      </form>
    </ReactCSSTransitionGroup>
  );
};

SignUpFormSecondPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
};

export default reduxForm({
  form: "signup",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignUpFormSecondPage);
