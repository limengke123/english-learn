import React from 'react'
import propTypes from 'prop-types'
import WordListItem from '../wordListItem/wordListItem'
import style from './index.module.scss'

export default class EnglishModule extends React.Component {
    static propTypes = {
        title: propTypes.string.isRequired,
        wordArray: propTypes.arrayOf(propTypes.shape({
            word: propTypes.string.isRequired,
            translate: propTypes.string.isRequired
        }))
    }

    render () {
        console.log(style)
        const {title, wordArray} = this.props
        return (
            <div className={style.module}>
                <header className={style.title}>{title}</header>
                <div className={style.body}>
                    {
                        wordArray.map(item => <WordListItem key={item.word} item={item}/>)
                    }
                </div>
            </div>
        )
    }
}