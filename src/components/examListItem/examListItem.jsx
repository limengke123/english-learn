import React from 'react'
import propTypes from "prop-types"
import {Input} from 'antd'
import style from './index.module.scss'
import throttle from "lodash/throttle";

export default class ExamListItem extends React.Component {
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
            <div className={style["exam-list-item"]}>
                <div className={style.index}>#{index}</div>
                {/*<div className={style.word}>{word}</div>*/}
                <div className={style.translate} onClick={() => this.speakWithThrottled(word)}>{translate}</div>
                <div className={style["input-area"]}>
                    <Input size={'large'}/>
                </div>
            </div>
        )
    }
}