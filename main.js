const baseUrl = `http://localhost:5000`
window.onload = function() {
  getSessionId()
}

function getSessionId() {
  fetch(`${baseUrl}/session`)
    .then(res => res.json())
    .then(data => {
      document.getElementById(
        'sessionId'
      ).innerHTML = `<strong> Session ID: </strong> ${data.sess_id}`
    })
    .catch(err => console.log(err))
}
