import React from "react";
import {mount} from 'enzyme';
import App from '../App';
describe('App tests', () => {
   it('App component renders correctly', () => {
       const component = mount(<App/>);
       expect(component).toMatchSnapshot();
   });
});