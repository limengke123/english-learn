import React from 'react'
import propTypes from 'prop-types'
import style from './index.module.scss'

export default class WordListItem extends React.Component {
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
            <div className={style["word-list-item"]}>
                <div className={style.index}>#{index}</div>
                <div className={style.word}>{word}</div>
                <div className={style.translate}>{translate}</div>
            </div>
        )
    }
}