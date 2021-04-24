import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';
import './App.css';
import './styles.css'

function Nav() {
  const links = ['Zack Ulam', 'Web Development', 'Music', 'Guitar Lessons', 'Music Feels']
  return ( 
    <>
      <script type="text/javascript" src='./script.js'></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <nav id="myTopNav" class="topnav">
        { links.map(link => (
          <a class='nav-item' key={link}>{link}</a>
        )) }
        <a href="javascript:void(0);" class="icon" onclick="navResize()">
          <i class="fa fa-bars"></i>
        </a>
        </nav>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
}

function Title() {
  const titleStyle = {fontFamily: 'optima', width: '500px', margin: 'auto'};
  return (
    <div style={titleStyle}>
    <br/><br/>
      <h2>Hello!</h2>
      <h2>My name is Zack Ulam. I am a:</h2>
      <a>Web Developer</a><br/>
      <a>Musician</a><br/>
      <a>Instructor</a><br/>
      <a>Creator</a><br/><br/>
      <a href="https://www.linkedin.com/in/zack-ulam-605220132/" className="fa fa-links fa-linkedin" target="_blank"></a>
      <a href="https://github.com/zulam" className="fa fa-links  fa-github" target="_blank"></a>
      <a href="https://soundcloud.com/zackulam" className="fa fa-links  fa-soundcloud" target="_blank"></a>
      <a href="https://www.instagram.com/musicfeelsreviews/" className="fa fa-links  fa-instagram" target="_blank"></a><br/><br/>
      <label id="label" for="email">Let's talk!</label>
      <p className="pad-bottom">
        Zachary.Ulam@gmail.com <br/> (330) 883-8896
      </p>
    </div>
  );
}

function Sec(props) {
  const headStyle = {color: 'rgb(52, 70, 151)', paddingTop: '180px', width: '400px', margin: 'auto', fontSize: '300%', fontFamily: 'optima'};
  const bodyStyle = {color: 'black', width: '400px', margin: 'auto', fontSize: '135%', fontFamily: 'optima'};
  return (
    <>
      <p id={props.header} style={headStyle}>
        {props.header}
      </p>
      <p id={props.body} style={bodyStyle}>
        {props.body}
      </p>
  </>
  );
}
  

function App() {
  const secs = [['Guitar Lessons','Testing Lessons'], ['Web Dev','Testing Dev'], ['Music','Testing Music'], ['Music Feels','Testing Gram']];
  const background = '../src/unsplash.jpg';
  return (
    <>
      <Title/>
      <div style={{backgroundImage:`url(${background})`, backgroundSize: '100% 112%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', overflow: 'auto'}}></div>
      { secs.map(s => (
        <Sec header={s[0]} body = {s[1]}/>
      )) }
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
