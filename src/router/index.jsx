import React, {Fragment} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import HomePage from '../page/home'
import ExamPage from '../page/exam'

export default () => {
    return (
        <Router>
            <Fragment>
                <Route path={'/'} render={() => <HomePage />} exact/>
                <Route path={'/exam'} render={() => <ExamPage />} />
            </Fragment>
        </Router>
    )
}