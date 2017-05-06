var React = require('react')
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      // use jquery to check elements
      // store root of component in terms of DOM
      // findDOMNode is a reactDOM function that lets you access the mounted (!) HTML of the component
      // unmounted components throw an exception. try to use refs to access form values
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      var expectedTimeDisplay = '01:02';
      expect(actualText).toBe(expectedTimeDisplay);
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);

      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec < 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);

      var seconds = 70;
      var expected = '01:10';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
