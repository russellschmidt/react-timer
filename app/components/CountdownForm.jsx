var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;

    // we only want 0-9
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = ''; // clear input
      this.props.onSetCountdown(parseInt(strSeconds, 10)); //pass in as integer in base 10
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" min="0" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
