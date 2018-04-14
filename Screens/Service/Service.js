
export function getAllTweetsForUser(payload) {
  
  return fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=2', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('Forgot password:::',responseJson)
      if (responseJson) {
        return responseJson;        
      } else {
        throw ('email does not exist')        
      }
    })
    .catch((error) => {
      throw (error)

      console.error(error);
    });
}