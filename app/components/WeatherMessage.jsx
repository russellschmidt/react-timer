var React = require("react");

var WeatherMessage = ({temp, location, units}) => {
  return (
    <div>
      <h4>It is {temp}&deg;{units} in {location}</h4>
    </div>
  );
}

module.exports = WeatherMessage;
