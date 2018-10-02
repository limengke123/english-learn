import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button} from 'antd'
import style from './index.module.scss'

class IndexPage extends React.Component {
    render () {
        const {history} = this.props
        return (
            <div className={style["index-page"]}>
                <main className={style.main}>
                    <div className={style.title}>
                        <img src={require('../../assert/logo.svg')} className={style.logo} alt="logo"/>
                        <div>英语单词练习</div>
                    </div>
                    <div className={style["button-wrapper"]}>
                        <Button type={'primary'} onClick={() => history.push('/word')} block size={'large'}>单词列表</Button>
                    </div>
                    <div>
                        <Button type={'primary'} onClick={() => history.push('/exam')} block size={'large'}>单词训练</Button>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(IndexPage)