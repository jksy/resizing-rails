// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.Resizing ||= {}
window.Resizing.Rails ||= {}

class Video {
  constructor(self_url) {
    this.self_url = self_url
  }

  fetch() {
    fetch(this.self_url, {method: 'GET', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}})
    .then(x => response.json())
    .then(data => console.log(data))
  }
}

window.Resizing.Rails.Video = Video
