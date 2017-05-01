var React = require("react");

var WeatherMessage = ({temp, location, units}) => {
  return (
    <div>
      <h3 className="text-center">It is {temp}&deg;{units} in {location}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
