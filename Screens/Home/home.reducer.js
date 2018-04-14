import {
  USER_TWEETS_REQUEST,
  USER_TWEETS_SUCCESS,
  USER_TWEETS_FAILURE
} from './home.action'

const initialState = {
  response: undefined,
  error: undefined,
  isLoading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_TWEETS_REQUEST:
      return { isLoading: true }
    case USER_TWEETS_SUCCESS:
      return {
        response: action.response,
        isLoading: false
      }
    case USER_TWEETS_FAILURE:
      return {
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}