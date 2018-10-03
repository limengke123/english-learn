import React from 'react'
import propTypes from "prop-types"
import style from './index.module.scss'

export default class ExamListItem extends React.Component {
    static propTypes = {
        item: propTypes.shape({
            word: propTypes.string.isRequired,
            translate: propTypes.string.isRequired,
            index: propTypes.number.isRequired
        })
    }
    render () {
        const {word, translate, index} = this.props.item
        return (
            <div className={style["exam-list-item"]}>
                <div className={style.index}>#{index}</div>
                <div className={style.word} onClick={() => this.speakWithThrottled(word)}>{word}</div>
                <div className={style.translate} onClick={() => this.speakWithThrottled(word)}>{translate}</div>
            </div>
        )
    }
}