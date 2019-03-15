import React from 'react';
import Footer from '../../components/Footer';
import { shallow } from 'enzyme';


describe('<Footer />', () => {
    it('renders', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('p').text()).toEqual('Copyright © Keep It Simple Blog 2018');
    });
});
