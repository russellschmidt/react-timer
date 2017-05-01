var React = require("react");
var {Link} = require("react-router");

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered">About</h1>
      <p>Learn more about this little app</p>
      <ol>
        <li>
          <a href="https://github.com/russellschmidt/react-weather">Visit the Github Repo</a>
        </li>
        <li>
          <a href="https://www.russellschmidt.net">Visit Me</a>
        </li>
        <li>
          <a href="https://www.twitter.com/rustiest">Find Me On Twitter</a>
        </li>
        <li>
          <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">Udemy Inspiration</a>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
