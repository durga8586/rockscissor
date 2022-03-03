import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  ScoreRe,
  MainDiv,
  Button,
  Image,
  ButtonCntr,
  ResultCntr,
  Buttons,
  FlexRow,
  Head,
  JcStartEnd,
} from './style'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Match extends Component {
  state = {
    score: 0,
    isGameCompleted: false,
    gameStatus: '',
    youImg: '',
    oppImg: choicesList[0].imageUrl,
  }

  onClickRock = () => {
    const rand = Math.ceil(Math.random() * choicesList.length - 1)
    console.log(rand)
    if (rand === 1) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameCompleted: true,
        youImg: choicesList[0].imageUrl,
        oppImg: choicesList[rand].imageUrl,
        gameStatus: 'YOU WON',
      }))
    } else if (rand === 2) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameCompleted: true,
        youImg: choicesList[0].imageUrl,
        oppImg: choicesList[rand].imageUrl,
        gameStatus: 'YOU LOSE',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score,
        isGameCompleted: true,
        youImg: choicesList[0].imageUrl,
        gameStatus: 'IT IS DRAW',
        oppImg: choicesList[rand].imageUrl,
      }))
    }
  }

  onClickScissor = () => {
    const rand = Math.ceil(Math.random() * choicesList.length - 1)
    if (rand === 2) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameCompleted: true,
        youImg: choicesList[1].imageUrl,
        oppImg: choicesList[rand].imageUrl,
        gameStatus: 'YOU WON',
      }))
    } else if (rand === 0) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameCompleted: true,
        youImg: choicesList[1].imageUrl,
        oppImg: choicesList[rand].imageUrl,
        gameStatus: 'YOU LOSE',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score,
        isGameCompleted: true,
        youImg: choicesList[1].imageUrl,
        oppImg: choicesList[rand].imageUrl,
        gameStatus: 'IT IS DRAW',
      }))
    }
  }

  onClickPaper = () => {
    const rand = Math.ceil(Math.random() * choicesList.length - 1)
    if (rand === 0) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameCompleted: true,
        youImg: choicesList[2].imageUrl,
        oppImg: choicesList[rand].imageUrl,
        gameStatus: 'YOU WON',
      }))
    } else if (rand === 1) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameCompleted: true,
        youImg: choicesList[2].imageUrl,
        oppImg: choicesList[rand].imageUrl,
        gameStatus: 'YOU LOSE',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score,
        isGameCompleted: true,
        youImg: choicesList[2].imageUrl,
        oppImg: choicesList[rand].imageUrl,
        gameStatus: 'IT IS DRAW',
      }))
    }
  }

  onClickPlay = () => {
    this.setState({
      isGameCompleted: false,
      gameStatus: '',
      youImg: '',
      oppImg: '',
    })
  }

  render() {
    const {score, isGameCompleted, gameStatus, youImg, oppImg} = this.state
    return (
      <MainDiv>
        <FlexRow>
          <Head>ROCK PAPER SCISSORS</Head>
          <JcStartEnd>
            <ScoreRe>Score</ScoreRe>
            <ScoreRe>{score}</ScoreRe>
          </JcStartEnd>
        </FlexRow>
        <ResultCntr>
          {!isGameCompleted && (
            <ButtonCntr>
              <ResultCntr>
                <Button
                  type="button"
                  data-testid="rockButton"
                  onClick={this.onClickRock}
                >
                  <Image
                    src={choicesList[0].imageUrl}
                    alt={choicesList[0].id}
                  />
                </Button>
                <Button
                  type="button"
                  data-testid="scissorsButton"
                  onClick={this.onClickScissor}
                >
                  <Image
                    src={choicesList[1].imageUrl}
                    alt={choicesList[1].id}
                  />
                </Button>
              </ResultCntr>
              <Button
                type="button"
                data-testid="paperButton"
                onClick={this.onClickPaper}
              >
                <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
              </Button>
            </ButtonCntr>
          )}
          {isGameCompleted && (
            <ButtonCntr>
              <ResultCntr>
                <ButtonCntr>
                  <ScoreRe>YOU</ScoreRe>
                  <Image src={youImg} alt="your choice" />
                </ButtonCntr>
                <ButtonCntr>
                  <ScoreRe>OPPONENT</ScoreRe>
                  <Image src={oppImg} alt="opponent choice" />
                </ButtonCntr>
              </ResultCntr>
              <ButtonCntr>
                <p>{gameStatus}</p>
                <Buttons type="button" onClick={this.onClickPlay}>
                  PLAY AGAIN
                </Buttons>
              </ButtonCntr>
            </ButtonCntr>
          )}
        </ResultCntr>
        <ResultCntr>
          <Popup
            modal
            trigger={
              <Buttons type="button" className="trigger-button">
                RULES
              </Buttons>
            }
          >
            {close => (
              <>
                <Buttons
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </Buttons>
                <ResultCntr>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ResultCntr>
              </>
            )}
          </Popup>
        </ResultCntr>
      </MainDiv>
    )
  }
}

export default Match
