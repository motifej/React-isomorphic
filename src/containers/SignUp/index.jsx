import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import './style.scss';

const styleProgress = {
    height: '9px',
    display: 'block',
    borderBottom: 'solid #b1adad 2px',
    borderTop: 'solid #b1adad 2px',
    backgroundColor: '#fff',
    borderRadius: '0'
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
  }

  nextPage = () => this.setState({ page: this.state.page + 1 })

  submit = (data) => {
    const { reset, signUp } = this.props.actions;
    signUp(data);
    reset('signup');
    this.nextPage();
  }

  prevPage = () => this.setState({ page: this.state.page - 1 })

  render() {
    const { page } = this.state;
    return (
      <div className='sign_up'>
        <h1 className='title'>{page === 3 ? 'Thank you!' : 'SignUp'}</h1>
        <LinearProgress mode="determinate" value={page*100/3} style={styleProgress} />
        {page === 1 && <FirstPage onSubmit={this.nextPage} />}
        {page === 2 && <SecondPage prevPage={this.prevPage} onSubmit={this.submit} />}
        {page === 3 && <ThirdPage />}
      </div>
    );
  }
}

export default SignUp;
