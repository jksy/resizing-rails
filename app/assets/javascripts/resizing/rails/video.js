// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.Resizing ||= {}
window.Resizing.Rails ||= {}

class Video {
  constructor(self_url, style, parentElement) {
    this.self_url = self_url
    this.style = style
    this.parentElement = parentElement
    let video = this.buildVideoTag(style)
    this.video = videojs(video.id)
  }

  fetch() {
    fetch(this.self_url, {method: 'GET', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}})
    .then(response => response.json())
    .then(data => {
      if(data.thumbnail_url) {
        this.renderVideo(data)
      }
      if(data.state != 'ready') {
        setTimeout(this.fetch.bind(this), 30_000)
      }
    }
    )
  }

  renderVideo(data) {
    this.video.poster(data.thumbnail_url)
    this.video.src({type: 'application/x-mpegURL', src: data.m3u8_url})
    this.video.src({type: 'video/mp4', src: data.avc_url})
  }

  buildVideoTag() {
    let template = document.getElementById('video-template')
    let node = document.importNode(template.content, true)
    let video = node.querySelector('video')
    video.id = `video-${this.generateUniqueId()}`

    if(this.style) {
      video.setAttribute("style", this.style)
    }
    this.parentElement.appendChild(video)
    return video
  }

  generateUniqueId() {
    return (new Date).getTime().toString(16)
  }
}

window.Resizing.Rails.Video = Video
