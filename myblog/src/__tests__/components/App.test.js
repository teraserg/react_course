import React from 'react'
import { shallow } from 'enzyme'
import App from '../../components/App'

describe('App Container', () => {
  it('should be rendered without crashing', () => {
    shallow(<App />)
  })
})
