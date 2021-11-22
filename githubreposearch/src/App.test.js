import { render, screen } from '@testing-library/react';
import { mount,shallow, configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });


describe('App component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });

  it('should find the text Seach the Git Repo after rendering', () => {
    render(<App />);
    const text = screen.getByText(/Seach the Git Repo/i);
    expect(text).toBeInTheDocument();
  })  
})
