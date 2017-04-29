var React = require("react");
var WeatherTitle = require("WeatherTitle");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var OpenWeatherMap = require("OpenWeatherMap");

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      unit: 'F'
    }
  },
  handleOnSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location, this.state.unit).then(function(returnObj) {
      that.setState({
        location: returnObj.name,
        temp: returnObj.temp,
        isLoading: false
      })
    }, function(err){
      that.setState({
        isLoading: false,
        location: ''
      });
      alert(err);
    });
  },
  render: function () {
    var {temp, location, isLoading} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      } else {
        return <p></p>
      }
    }

    return (
      <div>
        <WeatherTitle/>
        <WeatherForm onSearch={this.handleOnSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
