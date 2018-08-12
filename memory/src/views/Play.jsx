import React from 'react'
import shuffle from 'lodash/shuffle'

import Cards from '../cards'
import Card from '../components/Card'
import CountDown from '../components/CountDown'
import Layout from './layout'
import Spinner from '../components/DoubleBounceSpinner'
import PropTypes from 'prop-types';

const NOOP = function () {};
const REVEAL_PERIOD = 850;// ms
const GAME_DURATION = 300;
const NUM_OF_PAIRS = 10; // max: Cards.length (12)

function merge (...args) {
  return [{}, ...args].reduce(Object.assign)
}

class MemoryGame extends React.Component{
  constructor() {
    super();
    this.state = {
      cardsList: this.generateGame(),
      gameOver: false,
      victory: false,
      count: 0,
      playedTime: 0,
      match: {} };
  }

  componentWillMount () {
    clearTimeout(this.timeout)
  }

  componentDidMount () {
    this.enableCardClick()
  }

  render () {
    return (
      <div className='container justify-content-center'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-xl-9 col-md-12 col-12'>
            <Layout >
              <div className='play-view'>
                <div className='control row'>
                  <Spinner />
                  <span className='col timer'>
                    <CountDown
                      stop={this.state.victory}
                      timeInSeconds={GAME_DURATION}
                      onTimeExpired={this.timeExpired}
                      countTime={0}
                      gameTime={this.gameDuration}
                    />
                  </span>
                  <div className='moves align-self-end'>
                    <p>Potez: <span>{this.state.count}</span></p>
                  </div>
                </div>
                <div className='cards card-columns'>
                  {this.renderCardsList()}
                </div>
              </div>
            </ Layout>
          </div>
        </div>
      </div>
    )
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  renderCardsList =()=> {
    return this.state.cardsList.map((data, i) => {
      return (
        <Card
          key={`card-${data.label}-${i}`}
          index={i}
          onClick={!data.revealed ? this.cardClicked : NOOP}
          {...data} />
      )
    })
  }

  timeExpired = () => {
    return(
      this.setState({ gameOver: true }, () => { this.props.onGameFinished(this.state) })
    )
  }
  cardClicked  = (currentCard) => {
    if (this.isCardClickDisabled) return;
    this.disableCardClick();

    const cardsList = this.updateCurrentCard(this.state.cardsList, currentCard);
    const match = this.updateRevealedCard(currentCard);

    if (this.isVictory(match)) {
      this.state.count ++;
      clearTimeout(this.timeout);
      this.setState({ cardsList, match, victory: true }, () => { this.props.onGameFinished(this.state) })
    } else {
      this.state.count ++;
      this.setState({ cardsList, match }, () => {
        this.timeout = setTimeout(() => this.cleanBoard(currentCard), REVEAL_PERIOD)
      })
    }
  };

  updateCurrentCard (list, current) {
    return [].concat(list.map((item, i) => i === current.index ? merge(item, current) : item))
  }

  updateRevealedCard (current) {
    let match = Object.assign({}, this.state.match);
    match[current.label] = match[current.label] || 0;

    if (current.revealed) match[current.label]++;
    return match
  }

  isVictory (match) {
    return Object
      .keys(match)
      .map((key) => match[key])
      .reduce((n, total) => n + total, 0) === (2 * NUM_OF_PAIRS)
  }

  cleanBoard (currentCard) {
    const match = this.updateUnmatchedCards(currentCard);
    const cardsList = this.updateBoard(currentCard, match);

    this.setState({ cardsList, match }, function () {
      this.enableCardClick()
    })
  }

  updateUnmatchedCards (current) {
    let match = Object.assign({}, this.state.match);
    Object
      .keys(match)
      .forEach((key) => match[key] < 2 && (match[key] = 0));

    // If the current reveal is not a match, keep the last one
    if (match[current.label] < 2) match[current.label] = 1;
    return match
  }

  updateBoard (currentCard, match) {
    return [].concat(this.state.cardsList.map((item, i) => {
      const otherCard = (i !== currentCard.index);
      const completelyRevelead = (match[item.label] >= 2);
      return otherCard && !completelyRevelead ? merge(item, { revealed: false }) : item
    }))
  }

  generateGame = () => {
    const cardsList = shuffle([].concat(Cards)).slice(0, NUM_OF_PAIRS);
    return shuffle(cardsList.concat(cardsList))
  };

  enableCardClick () {
    this.isCardClickDisabled = false
  }

  disableCardClick () {
    this.isCardClickDisabled = true
  }

  gameDuration = (state) => {
    this.setState({playedTime: this.formattedTime(state.countTime)})
  };

  formattedTime = (state) => {
    let minutes = Math.floor(state / 60);
    if (String(minutes).length < 2) minutes = `0${minutes}`;
    let seconds = state % 60;
    if (String(seconds).length < 2) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`
  }
}
MemoryGame.propTypes = {
  onGameFinished: PropTypes.func
};
export default MemoryGame
