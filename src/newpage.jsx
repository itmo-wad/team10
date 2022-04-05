import React from 'react';
import {Card, Col, Accordion, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'
import {Box,Container,Row,Column,FooterLink,Heading} from "./FooterStyles.js";

class Newpage extends React.Component {
  render() {
    return (
    <div id="Parent">
     <Logo/>
     <Home/>
     <Image1/>
     <MyComponent/>
     <PreMap/>
     <Footer/>
    </div>   
    );
  }
}

export const gtranslate = function () {
    return (
      <div id="google_translate_element"></div>
    );
}

export const Logo = function() {
  return (
    <div id="Logo">
    
      <div id="header">
        <img src="src/Images/itmo_horiz_blue_rus.png" style={{height: 40}} />
      </div>

      <div>  
        <div id="flag">
          <img src="src/Images/United-Kingdom.png"/>
        </div>
      </div>
    </div>
  );
}

export const Home = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Doc',
        link: '/'
      },
      {
        text: 'Custom',
        link: '/'
      },
      {
        text: 'Contact',
        link: '/'
      }
    ],
    logo: {
      text: ''
    },
    style: {
      barStyles: {
        backgroundImage: `url('src/Images/scr.png')`
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
  }
  return (
    <div id="Navbar">
    	<Navbar {...props}/>
    </div>
  )
}

/*<p id="Navbtitle"><b>Лаборатория работотехники</b></p>
    <p id="p1">Контакты</p>
    <p id="p2">Новости</p>
    <p id="p3">Научная деятельность</p>
    <p id="p4">Учебная деятельность</p>
    <p id="p5">О лаборатории</p>
*/

function sayHello() {
  alert('You clicked me!');
}

export const Image1 = function() {
  return (
    <div id="backgr_mage">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="src/Images/11.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="h3carous">First slide label</h3>
      <button id="but1" onClick={sayHello}>Подробнее</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="src/Images/11.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="h3carous">Second slide label</h3>
      <button id="but1" onClick={sayHello}>Подробнее</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="src/Images/11.jpg"
      alt="Third slide"
      style={{height:'120%'}}
    />

    <Carousel.Caption>
      <h3 className="h3carous">Third slide label</h3>
      <button id="but1" onClick={sayHello}>Подробнее</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      news: []
    };
  }

  componentDidMount() {
    fetch("https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=6")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            news: result.news
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, news } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="news_div">
          <h3 id="h3">Новости и собития</h3>
          <div className="container" style={{ height: '40%'}}>{news.map((news, index) => (
              <Col key={index} lg={2} className="col-im" className="col-im2">
                    <Card>
                      <Card.Img variant="top" src={news.image_small} />
                      <Card.Body style={{padding:'0px 0 25px 0'}}>
                      <Card.Title>{news.date}</Card.Title>
                      <Card.Subtitle style={{padding:'0px 0 25px 0'}}>{news.title}</Card.Subtitle>
                      <a href={news.url} className="btn btn-outline-primary btn-sm" style={{height: '25px'}}>Read more</a>
                      </Card.Body>
                    </Card>
               </Col>
              ))}
          </div>
        </div>
      );
    }
  }
}

export const PreMap = function(){
  return(
    <div id="accordion">
    <h5 style={{ position:'relative', textAlign:'center'}}>Дисциплины</h5>
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div>
  )
}

/*export const Footer = function() {
  return (
    <div id="footer">
      <div id="map_div">
        <img id="map_img" src="src/Images/Screenshot 2021-10-15 085118.png" style={{width:'100%'}}/>
        <p id='kot'></p>
      </div>
    </div>
  );
}*/

export class Footer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    showBox: false,
    username: '',
    password: ''
    }

    this.auth = this.auth.bind(this);
    this.handleChangeEvents = this.handleChangeEvents.bind(this);
    this.handleSubmitevents = this.handleSubmitevents.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleBoxToggle = this.handleBoxToggle.bind(this);
    this.mouseIku= this.mouseIku.bind(this);
  }
  
  handleChangeEvents(event) {
    this.setState({username: event.target.value});
    console.log("handleChangeEvents",this.state.username)
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  handleSubmitevents(event) {
    alert('A username was submitted: ' + this.state.username + 
    '     A password was submitted: ' + this.state.password);
    event.preventDefault();
    this.auth();
  }
//Kjo esht pjesa fundit, me e renddesishmja,pothuajse e zgjidha duke thirrur auth() brenda handleSubmitevents
   auth() {
    console.log("clicked")
    let xhr = new XMLHttpRequest();
    if(this.state.username !== '' && this.state.password !== ''){
      console.log("username updated", this.state.username, "passupdated", this.state.password);

    xhr.withCredentials = true;
    xhr.open('GET', 'https://examples.com/api/user/authenticate?username=' + this.state.username + '&password=' + this.state.password, true);//url is just an example of authentication

    xhr.responseType = 'json';
    
    xhr.send();

    let result = false;

    xhr.onload = function() {
      let responseObj = xhr.response;
      alert(responseObj.message); 

      if (xhr.status !== '200'){
        result = xhr.response;
      } else {
        result = true;
      }
    }
      return result;
    }else{
      console.log("bosh")
    }
  }

  handleBoxToggle(){ 
    this.setState({ showBox: !this.state.showBox })
  };

  mouseIku(){
    this.setState({showBox: false})
  }

  render() {
    return (
      <div id="footer" onMouseEnter={this.handleBoxToggle} className={`login${this.state.showBox ? " show" : ""}`}>
        <p id="clickthemap">Click the map to log in</p>
        <div id="map_div">
          <img id="map_img" src="src/Images/Screenshot 2021-10-15 085118.png" style={{width:'100%'}}/>
          <p id='kot'></p>
        </div>
        <div>
          <div className=" innerBox ">
            <form onSubmit={this.handleSubmitevents}>
              {
              //for handling error condition
              }
              <input id= "logininput1" type="text" data-test="username" value={this.state.username} onChange={this.handleChangeEvents} placeholder="Username"/><br/><br/>

              <input id= "logininput2" type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange } placeholder="Password"/><br/><br/>
              
              <input id="submitButton" type="submit" value="Log In" data-test="submit" />
            </form>
          </div>
        </div>
        <Box>
          <h1 style={{ color: "green",
                textAlign: "center",
                marginTop: "-50px" }}>
          </h1>
          <Container>
            <Row>
              <Column>
                <Heading>About Us</Heading>
                <FooterLink href="#">Aim</FooterLink>
                <FooterLink href="#">Vision</FooterLink>
                <FooterLink href="#">Testimonials</FooterLink>
              </Column>
              <Column>
                <Heading>Services</Heading>
                <FooterLink href="#">Writing</FooterLink>
                <FooterLink href="#">Internships</FooterLink>
                <FooterLink href="#">Coding</FooterLink>
                <FooterLink href="#">Teaching</FooterLink>
              </Column>
              <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">Чямиль Кацмоли</FooterLink>
              </Column>
              <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                  Facebook
                  </span>
                </i>
                </FooterLink>
                <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                  Instagram
                  </span>
                </i>
                </FooterLink>
                <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                  Twitter
                  </span>
                </i>
                </FooterLink>
                <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                  Youtube
                  </span>
                </i>
                </FooterLink>
              </Column>
            </Row>
          </Container>
	      </Box>
      </div>
    );
  }
}

/*class Main extends React.Component {
 constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
  this.setState({ windowWidth: window.innerWidth });
  };

 componentDidMount() {
  window.addEventListener("resize", this.handleResize);
 }

 componentWillUnMount() {
  window.addEventListener("resize", this.handleResize);
 } 

  render() {
    const { windowWidth } = this.state; 
    return <div>Current window width: {windowWidth}</div>
  }
}*/

export default Newpage;