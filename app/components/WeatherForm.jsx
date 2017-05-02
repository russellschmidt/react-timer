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
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
