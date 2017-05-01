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
      <div className="row">
        <div className="columns small-4">
          <button className="button success hollow expanded" onClick={this.onMetric}>Celsius</button>
        </div>
        <div className="columns small-4">
          <button className="button success hollow expanded" onClick={this.onImperial}>Fahrenheit</button>
        </div>
        <div className="columns small-4">
          <button className="button success hollow expanded" onClick={this.onKelvin}>Kelvin</button>
        </div>
      </div>
    )
  }
});

module.exports = WeatherUnits;
