import React from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from 'antd'
import style from './index.module.scss'
import ExamModule from '../../components/examModule/examModule'

class ExamPage extends React.Component{
    static propTypes = {
        wordList: propTypes.arrayOf(propTypes.shape({
            id: propTypes.string.isRequired,
            data: propTypes.arrayOf(propTypes.shape({
                word: propTypes.string.isRequired,
                translate: propTypes.string.isRequired
            }))
        }))
    }

    checkAnswer(){

    }

    render(){
        const {wordList} = this.props
        return (
            <div className={style.exam}>
                {
                    wordList.map(item => {
                        const {id, data} = item
                        return <ExamModule title={id} wordArray={data} key={id}/>
                    })
                }
                <div className={style.submit}>
                    <Button type={'primary'} size={'large'} onClick={this.checkAnswer}>提交</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    wordList: state.wordList
})

export default connect(mapStateToProps)(ExamPage)