// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.Resizing ||= {}
window.Resizing.Rails ||= {}

class Video {
  constructor(self_url, style, element) {
    this.self_url = self_url
    this.style = style
    this.element = element
  }

  fetch() {
    fetch(this.self_url, {method: 'GET', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}})
    .then(response => response.json())
    .then(data => {
      let template = document.getElementById('video-template')
      let node = document.importNode(template.content, true)
      let video = node.querySelector('video')
      video.id = data.id
      video.poster = data.thumbnail_url
      this.addSourceToVideo(video, data.m3u8_url, 'application/x-mpegURL')
      this.addSourceToVideo(video, data.avc_url, 'video/mp4')

      if(this.style) {
        video.setAttribute("style", this.style)
      }
      this.element.appendChild(video)
    }
    )
  }

  addSourceToVideo(video, url, contentType) {
    if(url === null || url === undefined) {
      return
    }

    let source = document.createElement('source')
    source.src = url
    source.type = contentType
    video.appendChild(source)
  }
}

window.Resizing.Rails.Video = Video
