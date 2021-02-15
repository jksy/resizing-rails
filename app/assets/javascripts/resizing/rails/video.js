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
    this.video = videojs(video.id, {fluid: true})
  }

  fetch() {
    let fetcher = new Resizing.Rails.VideoFetcher(this.self_url)
    fetcher.fetch().then(record => {
      console.log(record)
      if(record.thumbnail_url) {
        this.renderVideo(record)
      }
      if(record.state != 'ready') {
        setTimeout(this.fetch.bind(this), 30_000)
      }
    })
  }

  renderVideo(record) {
    this.video.poster(record.thumbnail_url)
    if(record.m3u8_url) {
      this.video.src({type: 'application/x-mpegURL', src: record.m3u8_url})
    }
    // if(record.avc_url) {
    //   this.video.src({type: 'video/mp4', src: record.avc_url})
    // }
  }

  buildVideoTag(style) {
    let video = document.createElement('video')
    // video.setAttribute('style', 'width: 100% !important; height 100% !important;')
    video.setAttribute('class', 'video-js')
    video.setAttribute('muted', 'true')
    video.setAttribute('controls', '')
    video.setAttribute('preload', 'metadata')
    video.setAttribute('data-setup', '{}')
    video.setAttribute('poster', '')
    video.id = `video-${this.generateUniqueId()}`

    if(this.style) {
      // video.setAttribute("style", this.style)
    }
    this.parentElement.appendChild(video)
    return video
  }

  generateUniqueId() {
    return (new Date).getTime().toString(16)
  }
}

window.Resizing.Rails.Video = Video
