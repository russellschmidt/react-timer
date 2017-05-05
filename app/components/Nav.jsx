var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <nav className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            ReactTimer
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link active">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link active">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Built by <a href="https://russellschmidt.net" target="_blank">Russell Schmidt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


module.exports = Nav;
