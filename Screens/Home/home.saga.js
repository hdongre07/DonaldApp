import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAllTweetsForUser } from '../Service/Service'
import { USER_TWEETS_REQUEST, userTweetSuccess, userTweetFailure } from './home.action'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* tweetsCall(action) {
   try {
     console.log('Saga called',action)
      const user = yield call(getAllTweetsForUser, action.payload);
      console.log('response', user)
      yield put(userTweetSuccess(user));
   } catch (e) {
      yield put(userTweetFailure(e));
   }
}

function* watchTweets() {
  yield takeLatest(USER_TWEETS_REQUEST, tweetsCall);
}

export default watchTweets;