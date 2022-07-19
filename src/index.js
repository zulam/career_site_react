import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';
import './App.css';
import './styles.css'
import {useRef} from 'react';
import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import AOS from 'aos'


function Nav(props) {
  const links = ['ZackUlam', 'Bio', 'Work', 'Contact']

  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  const expand = () =>  {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return ( 
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <nav id="myTopNav" className="topnav">
        { links.map((link, c) => (
          <a class='nav-item' onClick={() => handleClick(props.refs[c])} key={link}>{link}</a>
        )) 
        }
        <a href="javascript:void(0);" class="icon" onClick={() => expand()}>
          <i class="fa fa-bars"></i>
        </a>
        </nav>
        <form>
        </form>
    </>
  );
}

function Title(props) {
  //const titleStyle = {width: '650px', margin: 'auto', textAlign:"center", color: "white", position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'};
  return (
    <div id='title' ref={props.refs[0]}>
    <br/><br/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <h3 className='title-child' style={{fontSize: "300%", textAlign: 'left'}}>I'm <span class={'red-color'}>Zack Ulam.</span></h3>
      <h3 className='title-child' style={{fontSize: "300%", textAlign: 'left'}}>I am a <span class={'blue-color'}>full-stack web developer.</span></h3><br/>
      <br/><br/><br/><br/>
      {/* <a href="https://soundcloud.com/zackulam" className="fa fa-links  fa-soundcloud" target="_blank"></a>
      <a href="https://www.instagram.com/musicfeelsreviews/" className="fa fa-links  fa-instagram" target="_blank"></a><br/><br/> */}
    </div>
  );
}

function Contact(props) {
  return (
    <div ref={props.refs[3]} id='contact' className="pad-bottom" data-aos='fade-in'>
      <h2 id="contact-label">Let's Talk!</h2>
      <a style={{marginRight: '5px'}} href="https://www.linkedin.com/in/zack-ulam-605220132/" className="fa fa-links fa-linkedin fa-2x " target="_blank"/>
      <a style={{marginLeft: '5px'}} href="https://github.com/zulam" className="fa fa-links fa-2x  fa-github" target="_blank"/>
      <h4 className='contact-info'>
        Zachary.Ulam@Gmail.com <br/> (330) 883-8896
      </h4>
    </div>
  )
}

function Bio(props) {
  //const style={color:'white', fontSize: '200%'}
  return (
    <p id='bio' ref={props.refs[1]} data-aos='fade-in'>
      My passions are centered around creativity: web design, coding, music, and dreaming about my latest side hustle idea, to name a few.<br/><br/>
      I have been coding since 2015, but my passion grows for it daily.
    </p>
  )
}

function Sec(props) {
  const ref = useRef(null);

  const headStyle = {color: 'white', margin: 'auto', fontSize: '280%'};
  const bodyStyle = {color: 'white', margin: 'auto', fontSize: '135%', display: 'none'};
  const yearStyle = {color: props.color};

  return (
    <div className='sec-parent' data-aos='fade-in'>
      <p id={props.header} className='sec-header'>
        {props.header}
      </p>
      <p id={props.body} className='sec-year' ref={ref} style={yearStyle}>
        {props.location} | {props.year}
      </p>
      <p id={props.body} className='sec-detail'>
        {props.body}
      </p>
  </div>
  );
}
  

function App() {

  const ZackUlamRef = useRef(null);
  const BioRef = useRef(null);
  const WorkRef = useRef(null);
  const ContactRef = useRef(null);
  const refs = [ZackUlamRef, BioRef, WorkRef, ContactRef]
  const secs = [
    ['Ally Bank', 'Full-stack web developer using .NET and standard web stack.', '#b37cc2', '2018-2019', 'Charlotte, NC'],
    ['InfoCision', 'Developer for call center technologies using .NET.', '#92bf8c', '2020-2021', 'Akron, OH'], 
      ['Sylvan Technologies', 'Full-stack web developer using .NET and React components.', '#8694c2', '2021-2022', 'Atlanta, GA (Remote)']];
  const bioStyle = {position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, 0%)'}
  const workStyle = {position: 'absolute', top: '150%', left: '50%', transform: 'translate(-50%, 0%)'}
  const contactStyle = {position: 'absolute', top: '180%', left: '50%', transform: 'translate(-50%, 0%)'}
  const detailsStyle={position: 'absolute', top: '150%', left: '50%', transform: 'translate(-50%, 0%)', textAlign: "center", display: "flex", justifyContent: "space-evenly"}
  const fontStyle={fontFamily: 'Roboto,  sans-serif'}
  return (
    <body>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
      <script type="text/javascript" src='./script.js'></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script>
        {AOS.init()}
      </script>
      <div style={fontStyle}>
        <Nav refs={refs}/>
        <Title refs={refs}/>
        <Bio id='bio' refs={refs}/>
        <div id='detail-container' ref={refs[2]}>
          { secs.map((s, c)=> (
            <Sec ctr={c} header={s[0]} body={s[1]} color={s[2]} year={s[3]} location={s[4]}/>
          )) }
        </div>
        <div id='contact-container'>
          <Contact refs={refs}/>
        </div>
      </div>
    </body>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
