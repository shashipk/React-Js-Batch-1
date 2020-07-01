import React from "react";
import {shallow} from "enzyme";
import A from "../A";
describe('Component A works correctly', () => {
    const handleClick = jest.fn();
    const componentA = shallow(<A handleClick={handleClick}/>);

    it('Component A renders correctly', () => {
        expect(componentA).toMatchSnapshot();
    });

    it('Button click works correctly', () =>{
        componentA.find('button').simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});