var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = () => {
  return (
    <div>
      <nav>
        <h2>React Weather</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
      </nav>
    </div>
  )
};

module.exports = Nav;
