export const USER_TWEETS_REQUEST = 'USER_TWEETS_REQUEST' 
export const USER_TWEETS_SUCCESS = 'USER_TWEETS_SUCCESS' 
export const USER_TWEETS_FAILURE = 'USER_TWEETS_FAILURE' 

export function userTweetRequest(payload) {
    return {
        type: USER_TWEETS_REQUEST,
        payload
    }
}

export function userTweetSuccess(response) {
    console.log('Success', response)
    return {
        type: USER_TWEETS_SUCCESS,
        response
    }
}

export function userTweetFailure(error) {
    console.log('ERROR', error)    
    return {
        type: USER_TWEETS_FAILURE,
        error
    }
}