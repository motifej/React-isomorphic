import React from 'react'
import { shallow, mount } from 'enzyme';
import ThirdPage from '../src/containers/SignUp/ThirdPage'

describe('Dashboard Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<ThirdPage />)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('Have a Link to /dashboard', () => {
        expect(wrapper.find('Link').prop('to')).toEqual("/dashboard")
    });

});