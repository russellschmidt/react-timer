var React = require('react')
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    // need to pass DONE in as arg so Mocha knows we have a non-async test
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      var sec = 10;
      countdown.handleSetCountdown(sec);

      // check that countdown status is set to ten, updates
      expect(countdown.state.count).toBe(sec);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        // pass done() inside our non-async argument we want allowed
        done();
      }, 1001);
    });

    it('should set state to 0 after 2 seconds from timer expiration', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      var sec = 1;
      countdown.handleSetCountdown(sec);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});
