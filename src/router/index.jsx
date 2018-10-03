import React, {Fragment} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import IndexPage from '../page/indexPage/indexPage'
import HomePage from '../page/home/home'
import ExamPage from '../page/exam/exam'

export default () => {
    return (
        <Router>
            <Fragment>
                <Route path={'/'} exact render={() => <IndexPage />}/>
                <Route path={'/word'} render={() => <HomePage />} />
                <Route path={'/exam'} render={() => <ExamPage />} />
            </Fragment>
        </Router>
    )
}