import React from 'react';
import { mount } from 'enzyme';
import Comments from '../../components/Comments';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const oneArticleData = {
            id: 1,
            comment: 'possimus repellat quia culpa ipsam illum beatae reiciendis amet',
            author: 'John Smith',
            created_at: 'September 07, 2015 at 01:51 PM',
            avatar: 'http://www.gravatar.com/avatar/5b22c1ef381b0e09b04caba808342899?s=64&d=identicon',
        };


describe('<Comments />', () => {

    it('should be rendered one item with DEL button', () => {

        const {enzymeWrapper} = setup();

        expect(enzymeWrapper.find('.blog-items').length).toBe(1);
        expect(enzymeWrapper.find('.common-btn').length).toBe(1);
        expect(enzymeWrapper.find('.common-btn').text()).toEqual('DEL');
        expect(enzymeWrapper.find('.comment-text').length).toBe(1);
        expect(enzymeWrapper.find('.comment-text').text()).toEqual(oneArticleData.comment);
    });


    it('should be rendered one item without DEL button', () => {

        const {enzymeWrapper} = setup({account: {role: 'user'}});

        expect(enzymeWrapper.find('.blog-items').length).toBe(1);
        expect(enzymeWrapper.find('.common-btn').length).toBe(0);
        expect(enzymeWrapper.find('.comment-text').length).toBe(1);
        expect(enzymeWrapper.find('.comment-text').text()).toEqual(oneArticleData.comment);
    })
});


function setup(additionalProps = {}) {
    const props = {
        fullArticle: { comments: [oneArticleData] },
        account: {role: 'admin'}
    };

    const store = mockStore({...props, ...additionalProps});

    const enzymeWrapper = mount(
        <Provider store={store}>
          <Comments />
        </Provider>
    );

    return {
        props: { ...props, ...additionalProps },
        enzymeWrapper
    }
}
