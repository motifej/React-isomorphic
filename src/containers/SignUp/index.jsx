import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import Dialog from 'material-ui/Dialog';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import { getAge, checkDate } from './validate'
import { AGE_LIMIT } from '../../constants'
import './style.scss';

const styleProgress = {
    height: '9px',
    display: 'block',
    borderBottom: 'solid #b1adad 2px',
    borderTop: 'solid #b1adad 2px',
    backgroundColor: '#fff',
    borderRadius: '0'
}

const modalStyle = {
  width: '300px',
}

class SignUp extends Component {

  static defaultProps = {
    actions: {
      signUp: ()=>{}
    },
  }

  static propTypes = {
    actions: shape({
      signUp: func,
      reset: func
    })
  };

  state = {
    page: 1,
    open: false,
  }

  handleClose = () => this.setState({ open: false })

  nextPage = () => this.setState({ page: this.state.page + 1 })

  prevPage = () => this.setState({ page: this.state.page - 1 })

  submit = (data) => {
    const { reset, signUp } = this.props.actions
    const date = [data.day, data.month, data.year]
    let error = null;
    if(!checkDate(...date)) {
      error = 'invalid Date'
    } else if (getAge(...date) < AGE_LIMIT) {
      error = `your age less than ${AGE_LIMIT}`
    }
    if (error) {
      this.setState({ error, open: true })
    } else {
      signUp(data)
      reset('signup')
      this.nextPage()
    }
  }

  render() {
    const { page, open, error } = this.state;
    return (
      <div className='sign_up'>
        <h1 className='title'>{page === 3 ? 'Thank you!' : 'SignUp'}</h1>
        <LinearProgress mode="determinate" value={page*100/3} style={styleProgress} />
        {page === 1 && <FirstPage onSubmit={this.nextPage} />}
        {page === 2 && <SecondPage prevPage={this.prevPage} onSubmit={this.submit} />}
        {page === 3 && <ThirdPage />}
        <Dialog
          contentStyle={modalStyle}
          open={open}
          onRequestClose={this.handleClose}
        >
          {error}
        </Dialog>
      </div>
    );
  }
}

export default SignUp;
