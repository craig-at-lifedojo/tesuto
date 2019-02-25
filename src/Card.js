import React, { Component } from 'react';

import { transformCards } from './util'

const cardContainerStyle = {
  padding: '30px',
  margin: '30px',
  align: 'center',
  border: 'solid 1px #88c057'
}

export default class Card extends Component {

  constructor(props){
    super(props)
    this.state = { card: {} }
  }

  componentWillMount(){
    let urlGetCards = 'https://dojocms.lifedojo.com/api/v1/cards/get_weekly_program_cards/happiness/program-week-1';
    fetch(urlGetCards)
      .then(res => res.json())
      .then(data => this.pickCard(transformCards(data)))
  }

  pickCard(cards){
    for(var i=0;i<cards.length;i++){
      if(Number(this.props.match.params.cardId) === Number(cards[i].id)){
        this.setState({card: cards[i]})
        break
      }
    }
  }

  render() {
    return (
      <div id="card" style={cardContainerStyle}>
        <img src={this.state.card.thumbnail_image} alt={this.state.card.program}/>
        <h3>{this.state.card.header}</h3>
        <p>{this.state.card.body}</p>
      </div>
    );
  }
}