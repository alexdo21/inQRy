export const login = (creds) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  fetch("http://localhost:8080/api/user/login", {
    method: "POST",
    crossDomain: true,
    body: JSON.stringify(creds),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success === 1) {
        //localStorage.setItem('token', res.token)
        dispatch({
          type: "LOGIN_SUCCESS",
          token: res.token,
          user: res.user,
        });
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          error: res.message,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

export const register = (creds) => (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  fetch("http://localhost:8080/api/user/register", {
    method: "POST",
    crossDomain: true,
    body: JSON.stringify(creds),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success === 1) {
        //localStorage.setItem('token', res.token)
        dispatch({
          type: "REGISTER_SUCCESS",
          token: res.token,
          user: res.user,
        });
      } else {
        dispatch({
          type: "REGISTER_FAILURE",
          error: res.message,
        });
      }
    })
    .catch((err) => console.log(err));
};

// export const saveSiteId = (id) => dispatch => {
//     //console.log(id)
//     dispatch({
//         type: 'CHECKIN_REQUEST',
//         siteId: id
//     })
// }
export const checkIn = (data) => (dispatch) => {
  dispatch({ type: "CHECKIN_REQUEST" });
  fetch("http://localhost:8080/api/user/checkin", {
    method: "POST",
    crossDomain: true,
    body: JSON.stringify(data),
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success === 1) {
        //localStorage.setItem('token', res.token)
        dispatch({
          type: "CHECKIN_SUCCESS",
          site: res.site,
        });
      } else {
        dispatch({
          type: "CHECKIN_FAILURE",
          error: res.message,
        });
      }
    })
    .catch((err) => {
      console.log("HERe BITCHES");
      console.log(err);
    });
};
