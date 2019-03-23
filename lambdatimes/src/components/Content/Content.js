import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState({
      selected: tabData
    });
  };

  filterCards = () => {
    if(this.state.selected === 'all'){
      return this.state.cards;
    } else{
    return this.state.cards.filter(card => {return card.tab === this.state.selected});
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs}  selectedTab={this.state.selected} selectHandler ={this.changeHandler} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
