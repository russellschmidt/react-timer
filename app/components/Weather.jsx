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
    var oldTemp = this.state.temp;

    if (this.state.units === 'K' && units === 'C') {
      this.setState({
        temp: Math.round((oldTemp - 273.15)*100)/100
      });
    } else if (this.state.units === 'C' && units === 'K') {
      this.setState({
        temp: Math.round((oldTemp + 273.15)*100)/100
      });
    } else if (this.state.units === 'K' && units === 'F') {
      this.setState({
        temp: Math.round((oldTemp * (9/5) - 459.67)*100)/100
      });
    } else if (this.state.units === 'F' && units === 'K') {
      this.setState({
        temp: Math.round(((oldTemp + 459.67) * (5/9))*100)/100
      });
    } else if (this.state.units === 'C' && units === 'F') {
      this.setState({
        temp: Math.round((oldTemp * (9/5) + 32)*100)/100
      });
    } else if (this.state.units === 'F' && units === 'C') {
      this.setState({
        temp: Math.round(((oldTemp - 32) * (5/9))*100)/100
      })
    }

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
