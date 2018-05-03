const baseUrl = `http://localhost:5000`

window.onload = function() {
  getSessionId()
  const downloadBtn = this.document.getElementById('btn-download')
  downloadBtn.addEventListener('click', downloadFile)
}

function getSessionId() {
  fetch(`${baseUrl}/session`)
    .then(res => res.json())
    .then(data => {
      document.getElementById(
        'sessionId'
      ).innerHTML = `<strong> Sessiosn ID: </strong> ${data.sess_id}`
    })
    .catch(err => console.log(err))
}

function downloadFile() {
  fetch(`${baseUrl}/download`).then(res => res.blob())
}

const userForm = document.getElementById('userForm')
userForm.addEventListener('submit', event => {
  event.preventDefault()
  const formData = new FormData(userForm)
  formData.append('userId', 123)
  fetch(`${baseUrl}/multipartform`, {
    method: 'POST',
    body: formData
  })
})
