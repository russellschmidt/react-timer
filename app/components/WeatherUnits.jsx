var React = require('react');

var WeatherUnits = React.createClass({
  onMetric: function (event) {
    event.preventDefault();
    this.props.onUnits('C');
  },
  onImperial: function (event) {
    event.preventDefault();
    this.props.onUnits('F');
  },
  onKelvin: function (event) {
    event.preventDefault();
    this.props.onUnits('K');
  },
  render: function() {
    return (
      <div>
        <button onClick={this.onMetric}>Celsius</button>
        <button onClick={this.onImperial}>Fahrenheit</button>
        <button onClick={this.onKelvin}>Kelvin</button>
      </div>
    )
  }
});

module.exports = WeatherUnits;
