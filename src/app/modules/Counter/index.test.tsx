import { expect       } from 'chai'
import { ReactWrapper } from 'enzyme'

import { renderComponent } from '~/components/TestHelper'
import { Counter         } from './index'

/** Mock App. State */
const state: Object = {
  counter: { count: 1 },
}

describe('<Counter />', () => {

  let component: ReactWrapper<any, {}>

  beforeEach(() => {
    component = renderComponent(Counter, state)
  })

  it('Renders with correct style', () => {
    const s = require('./style.css')
    expect(component.find(s.counter)).to.exist
  })

  it('Renders header', () => {
    expect(component.find('h4').text()).to.eql('Counter Example')
  })

  it('Renders Increment and Decrement buttons', () => {
    expect(component.find('button')).to.have.length(2)
  })

  it('Renders counter value', () => {
    expect(component.find('p').text()).to.eql('1')
  })

  it('Calls the increment', () => {
    expect(component.find({ name: 'incBtn' })).to.exist
    component.find({ name: 'incBtn' }).simulate('click')
    expect(component.find('p').text()).to.eql('2')
  })

  it('Calls the decrement', () => {
    expect(component.find({ name: 'decBtn' })).to.exist
    component.find({ name: 'decBtn' }).simulate('click')
    expect(component.find('p').text()).to.eql('0')
  })

})
