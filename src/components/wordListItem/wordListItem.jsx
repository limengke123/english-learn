import React from 'react'
import propTypes from 'prop-types'
import throttle from 'lodash/throttle'
import style from './index.module.scss'

export default class WordListItem extends React.Component {
    static propTypes = {
        item: propTypes.shape({
            word: propTypes.string.isRequired,
            translate: propTypes.string.isRequired,
            index: propTypes.number.isRequired
        })
    }

    constructor(props) {
        super(props);
        this.speakWithThrottled = throttle(this.speak, 2000)
    }


    speak (word) {
        let words = new SpeechSynthesisUtterance(word);
        window.speechSynthesis.speak(words);
        words = null
    }

    render () {
        const {word, translate, index} = this.props.item
        return (
            <div className={style["word-list-item"]}>
                <div className={style.index}>#{index}</div>
                <div className={style.word} onClick={() => this.speakWithThrottled(word)}>{word}</div>
                <div className={style.translate} onClick={() => this.speakWithThrottled(word)}>{translate}</div>
            </div>
        )
    }
}