import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import propTypes from "prop-types"
import EnglishModule from '../components/module/moudle'

class HomePage extends React.Component{
    static propTypes = {
        wordList: propTypes.arrayOf(propTypes.shape({
            id: propTypes.string.isRequired,
            data: propTypes.arrayOf(propTypes.shape({
                word: propTypes.string.isRequired,
                translate: propTypes.string.isRequired
            }))
        }))
    }
    render(){
        const {wordList} = this.props
        return (
            <div>
                {
                    wordList.map(item => {
                        const {id, data} = item
                        return <EnglishModule title={id} wordArray={data} key={id}/>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(HomePage)