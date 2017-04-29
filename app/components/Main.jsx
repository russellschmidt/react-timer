var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>What is the weather outside?</h2>
      {props.children}
    </div>
  );
};

module.exports = Main;
