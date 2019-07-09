import React, { Component } from 'react';
import Buttons from './components/buttons';
import SocialMedia from './components/socialMedia';
import Fade from 'react-reveal/Fade';
import Text from './components/text';
// import HeadShake from 'react-reveal/HeadShake';
class App extends Component {
  constructor(props) {
    super(props);
    var ans;
    this.state = {
      drop:false
    }
  }
  toggle = () => {
    this.setState({
      drop:true
    })
    this.ans = <Buttons />
  }
  render() {
    return (
      <div className="container">
      {this.ans}
        <div className="img-position">
          <Fade top>
            <img src="/images/edumonk-logo.png" alt="site logo" onClick={this.toggle} />
          </Fade>
        </div>
        <div className="social-icons">
          <SocialMedia />
        </div>
        <div className="texting">
          <Fade bottom>
            <Text />
          </Fade>
        </div>
      </div>
    );
  }
}

export default App;
