export const actionTypes = {
  FETCH_START:'FETCH_START',
  FETCH_SUCCESS:'FETCH_SUCCESS',
  FETCH_ERROR:'FETCH_ERROR'
}

export const actionCreator = {
  fetchNews: () => {
    return (dispatch) => {
      dispatch({type: actionTypes.FETCH_START})
      new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve([
            {
              title: "111"
            },
            {
              title: "222"
            }
          ]);
        }, 2000)
      }).then((response) => {
        dispatch({
          type: actionTypes.FETCH_SUCCESS,
          news: response
        })
      }).catch(() => {
        dispatch({
          type: actionTypes.FETCH_ERROR
        })
      })
    }
  }
}

