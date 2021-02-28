// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

if(window.Resizing === undefined) { window.Resizing = {} }
if(window.Resizing.Rails === undefined) { window.Resizing.Rails = {} }

class Video {
  constructor(self_url, parentElement) {
    this.self_url = self_url
    this.parentElement = parentElement
    this.listener = null
    let video = this.buildVideoTag()
    this.video = videojs(video.id, {fluid: true})
    this.record = null
  }

  fetch() {
    let fetcher = new Resizing.Rails.VideoFetcher(this.self_url)
    fetcher.fetch().then(record => {
      this.record = record
      this.call('video_fetched', record)
      if(record.thumbnail_url) {
        this.renderVideo(record)
      }
      if(record.state != 'ready' && record.state != 'initialized') {
        setTimeout(this.fetch.bind(this), 5000)
      }
    })
  }

  renderVideo(record) {
    this.video.poster(record.thumbnail_url)
    if(record.m3u8_url) {
      this.video.src({type: 'application/x-mpegURL', src: record.m3u8_url})
    }
    if(record.avc_url) {
      this.video.src({type: 'video/mp4', src: record.avc_url})
    }
  }

  buildVideoTag() {
    let video = document.createElement('video')
    video.setAttribute('class', 'video-js')
    video.setAttribute('muted', 'true')
    video.setAttribute('controls', '')
    video.setAttribute('preload', 'metadata')
    video.setAttribute('data-setup', '{}')
    video.setAttribute('poster', '')
    video.id = `video-${this.generateUniqueId()}`
    this.parentElement.appendChild(video)
    return video
  }

  generateUniqueId() {
    return (new Date).getTime().toString(16)
  }

  addEventListener(listener) {
    this.listener = listener
  }

  call(...args) {
    if(this.listener !== null) {
      this.listener(...args)
    }
  }
}

window.Resizing.Rails.Video = Video
