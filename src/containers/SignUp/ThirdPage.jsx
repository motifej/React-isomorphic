import React from 'react';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import {greenA200} from 'material-ui/styles/colors';
import { Link } from 'react-router'

const iconStyles = {
    height: '200px',
    width: '200px',
};

export default () => (
  <div className='success'>
    <ActionCheckCircle style={iconStyles} color={greenA200} />
    <Link to="/" className='custom_btn'>Go to Dashboard</Link>
  </div>
)
