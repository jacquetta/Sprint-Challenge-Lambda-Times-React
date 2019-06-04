import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props, context){
    super(props,context);

    this.state = {
      index: 0,
      direction: null,
      images: carouselData
    };

    this.handleSelect = this.handleSelect.bind(this);

  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  
  render(){
    return (
      <div className="carousel">
        
      </div>
    )
  }
}