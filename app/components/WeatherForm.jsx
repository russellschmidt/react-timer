var React = require("react");

var WeatherForm = React.createClass({
  onFormSubmit: function (event) {
    event.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      // reset the input box
      this.refs.location.value = '';
      // pass up the prop to the parent by calling a parent function
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter city name"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
