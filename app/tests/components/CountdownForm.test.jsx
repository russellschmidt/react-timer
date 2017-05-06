var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();

    // render element, inject spy, and get HTML using jQuery selector to inspect a React component
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // manipulate the input value as normal using ref
    countdownForm.refs.seconds.value = '109';
    // simulate a submit! we submit by sending in the first non-jquery DOM node hence the [0]
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();

    // render element, inject spy, and get HTML using jQuery selector to inspect a React component
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // manipulate the input value as normal using ref
    countdownForm.refs.seconds.value = '109b';
    // simulate a submit! we submit by sending in the first non-jquery DOM node hence the [0]
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
