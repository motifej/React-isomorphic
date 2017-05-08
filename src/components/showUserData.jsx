import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'

const UserData = ({ user }) => (
  <div className='success'>
    <div>
      {JSON.stringify(user)}
    </div>
    <Link to="/signup" className='custom_btn'>Register new</Link>
  </div>
)

UserData.propTypes = {
    user: PropTypes.obj.isRequired,
}

export default UserData
