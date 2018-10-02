import React from 'react'
import propTypes from 'prop-types'

export default class WordListItem extends React.Component {
    static propTypes = {
        item: propTypes.shape({
            word: propTypes.string.isRequired,
            translate: propTypes.string.isRequired
        })
    }

    render () {
        const {word, translate} = this.props.item
        return (
            <div>
                <div>{word}</div>
                <div>{translate}</div>
            </div>
        )
    }
}