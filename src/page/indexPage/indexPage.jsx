import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button} from 'antd'
import style from './index.module.scss'

class IndexPage extends React.Component {
    render () {
        const {history} = this.props
        return (
            <div className={style["index-page"]}>
                <Button onClick={() => history.push('/word')}>单词列表</Button>
                <Button onClick={() => history.push('/exam')}>单词训练</Button>
            </div>
        )
    }
}

export default withRouter(IndexPage)