import React from 'react'
import { shallow, mount } from 'enzyme';
import Dashboard from '../src/components/showUserData'

describe('Dashboard Shallow Render REACT COMPONENTS',()=>{
    let wrapper
    const user = { email: 'a@a.a' }

    beforeEach(()=>{
        wrapper = shallow(<Dashboard user={user}/>)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('contains button with text Register new', () => {
       expect(wrapper.find('.custom_btn').get(0).props.children).toBe("Register new")
    });

    it('contains userData', () => {
       expect(wrapper.find('.user_data').get(0).props.children).toEqual(JSON.stringify(user))
    });

});