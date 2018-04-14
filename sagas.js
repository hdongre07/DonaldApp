
import watchTweets from './Screens/Home/home.saga'
import { fork } from 'redux-saga/effects'

export function* rootSaga () {
    yield [
        fork(watchTweets)
    ];
}