import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import { transformCards } from './util'

class CardList extends Component {

  constructor(props){
    super(props)
    this.state = { cards: [] }
  }
  
  componentWillMount(){
    let urlGetCards = 'https://dojocms.lifedojo.com/api/v1/cards/get_weekly_program_cards/happiness/program-week-1';
    fetch(urlGetCards)
      .then(res => res.json())
      .then(data => this.updateCards( transformCards(data) ))
  }

  updateCards(cards){
    this.setState( { cards: cards } )
    window.store.dispatch(updateCardsAction(cards))
  }

  render() {
    const cards = this.state.cards.map(card =>(
      <div key={card.id}>{card.display_order}. [{card.type}]<Link to={`/card/${card.id}`}>{card.header}</Link></div>
    ));
    return (
        <div id="cards">
          <div id='card-list'>{cards}</div>
        </div>
    );
  }

}

function mapStateToProps(state, action){
  return { cards: state.cards }
}

function mapDispatchToProps(dispatch){
  return {updateCardsAction: cards => dispatch(updateFavoritesActionCreator(cards))}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CardList);