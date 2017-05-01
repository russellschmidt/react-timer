var React = require("react");

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
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
        <li>
          <a href="https://facebook.github.io/react">Learn About React</a>
        </li>
        <li>
          <a href="http://www.openweathermap.org">OpenWeatherMap API</a>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
