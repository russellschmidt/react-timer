var React = require("react");
var WeatherTitle = require("WeatherTitle");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var OpenWeatherMap = require("OpenWeatherMap");
var WeatherUnits = require("WeatherUnits");

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      units: 'F'
    };
  },
  handleOnSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location, this.state.units).then(function(returnObj) {
      that.setState({
        location: returnObj.name,
        temp: returnObj.temp,
        isLoading: false
      });
    }, function(err){
      that.setState({
        isLoading: false,
        location: ''
      });
      alert(err);
    });
  },
  handleOnUnits: function (units) {
    this.setState({
      units: units
    });
  },
  render: function () {
    var {temp, location, isLoading, units} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp} units={units}/>;
      } else {
        return <p></p>;
      }
    };

    return (
      <div>
        <WeatherTitle/>
        <WeatherForm onSearch={this.handleOnSearch}/>
        {renderMessage()}
        <WeatherUnits onUnits={this.handleOnUnits}/>
      </div>
    );
  }
});

module.exports = Weather;
