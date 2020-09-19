export const getEntries = (data) => dispatch => {
    fetch("http://localhost:8080/api/user/records", {
        method: "GET",
        crossDomain: true,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    }).then(res => res.json())
    .then(res => {
        if (res.success === 1) {
            dispatch({
              type: "GET_ENTRIES_SUCCESS",
              payload: res.payload,
            });
          } else {
            dispatch({
              type: "GET_ENTRIES_FAILURE",
              error: res.message,
            });
        }
    }).catch(err => console.log(err))
}