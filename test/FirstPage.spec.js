import React from 'react'
import { shallow, mount } from 'enzyme';
import {SignUpFormFirstPage} from '../src/containers/SignUp/FirstPage'

describe('Dashboard Shallow Render REACT COMPONENTS',()=>{
    let wrapper
    const user = { email: 'a@a.a' }

    beforeEach(()=>{
        wrapper = shallow(<SignUpFormFirstPage handleSubmit={()=>{}}/>)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('contains Field with name email', () => {
       expect(wrapper.find('Field').get(0).props.name).toEqual('email')
    });

    it('contains Field with name password', () => {
       expect(wrapper.find('Field').get(1).props.name).toEqual('password')
    });

    it('contains Field with name confPassword', () => {
       expect(wrapper.find('Field').get(2).props.name).toEqual('confPassword')
    });

    it('contains button submit', () => {
       expect(wrapper.find('RaisedButton').prop('type')).toEqual('submit')
    });

});