import React from 'react'
import propTypes from 'prop-types'
import style from './index.module.scss'
import ExamListItem from '../examListItem/examListItem'


export default class ExamModule extends React.Component {
    static propTypes = {
        title: propTypes.string.isRequired,
        wordArray: propTypes.arrayOf(propTypes.shape({
            word: propTypes.string.isRequired,
            translate: propTypes.string.isRequired
        }))
    }
    render () {
        const {title, wordArray} = this.props
        return (
            <div className={style["exam-module"]}>
                <header className={style.title}>{title}</header>
                <div className={style.body}>
                    {
                        // wordArray.map((item, index) => <WordListItem key={item.word + index} item={{...item, index: index + 1}}/>)
                        wordArray.map((item, index)=> <ExamListItem key={item.word + index} item={{...item, index: index + 1}} />)
                    }
                </div>
            </div>
        )
    }
}