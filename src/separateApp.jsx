import React from 'react';
import {Card, Col, Accordion, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


class separateApp extends React.Component {
   const Logo = function() {
    return (
      <div id="Logo">
      
      <div id="header">
        <img src="src/Images/itmo_horiz_blue_rus.png" style={{height: 40}} />
      </div>

      <div id="flag">
        <img src="src/Images/United-Kingdom.png"/>
      </div>

      </div>
    );
  }

  export class Navbar extends React.Component {
    render() {
      return (
      <div id="Navbar">
      
      <p id="Navbtitle"><b>Лаборатория работотехники</b></p>
      <p id="p1">Контакты</p>
      <p id="p2">Новости</p>
      <p id="p3">Научная деятельность</p>
      <p id="p4">Учебная деятельность</p>
      <p id="p5">О лаборатории</p>
    
      </div>
      );
    }
  }

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

  export class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        news: []
      };
    }

    componentDidMount() {
      fetch("news.json")
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
            <div className="container" style={{ height: '100%'}}>{news.map((news, index) => (
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

  export const Map = function() {
    return (
      <div id="map_div">
        <img id="map_img" src="src/Images/Screenshot 2021-10-15 085118.png" style={{width:'100%'}}/>
      </div>
    );
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

  export const Footer = function() {
    return (
      <div id="footer">
      <p id='kot'></p>
      </div>
    );
  }


  export function Width() {
    const [dimensions, setDimension] = React.useState({ 
      width: window.innerWidth
    })
    React.useEffect(() => {
      function handleResize() {
        setDimension({
          width: window.innerWidth
        })   
      }
      window.addEventListener('resize', handleResize)
    })
    if(this.width < 400){
      return(
        <div id="dropbut">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <div id="result">Rendered at {dimensions.width}</div>
        </div>
      )
    }
    return <div id="result">Rendered at {dimensions.width}</div>

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

//react-bootstrap e do width edhe ke div edhe ke class te specifikuar vecmas per klasen/divin ne media tek css,qe mos tlevizi pozicion kur ndyshon madhesia ekranit.
//.container[style] per tbo override kodin e bootstrap