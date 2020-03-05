import React from 'react';
import renderer from 'react-test-renderer';
//import Adapter from 'enzyme-adapter-react-15';
import { shallow } from 'enzyme';
import App from '../../App';
//import ClassTest from '../../src/screens/class_testes';

const mockCallback = jest.fn(x => {
  if(x){
    return false;
  } else{
    return true;
  }
});

describe('teste App', () => {
  /*it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });*/

  /*it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });*/

  it('renders correctly', () => {
    const tree = new ClassTest('true');
    console.log(tree);
    //expect(tree).toEquals({});
  });

  /*it('save status switch', () =>{

    const wrapper = shallow(
      <App check={true}/>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({check : false});
    const mockFn = jest.fn().mockImplementation(value =>{
      if(value){
        return false;
      }else return true;
    });
    console.log(mockFn(true)); //false
    expect(wrapper).toMatchSnapshot();
  });*/
});