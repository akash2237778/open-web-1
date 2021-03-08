import { Carousel } from 'antd';
import React from 'react';
import '../index.css';




class HomeCarousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            heightSet: 0,
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    render(){
        const contentStyle = {
            height: '500' + 'px',
            color: '#fff',
            lineHeight: '500px',
            textAlign: 'center',
            background: '#364d79',
          };
        return (
          <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
       // mountNode,
        );
    }

    updateDimensions() {
        const margin = 0;
        const heightSet = document.body.scrollHeight - margin;
        this.setState({ heightSet });
       }
        
}


export default HomeCarousel;
