if(window.Resizing === undefined) { window.Resizing = {} }
if(window.Resizing.Rails === undefined) { window.Resizing.Rails = {} }

class VideoLoader {
  constructor() {
    window.addEventListener('DOMContentLoaded', (event)=> {
      let elements = document.querySelectorAll('[data-video-url]')
      elements.forEach(elem => {
        let url = elem.getAttribute('data-video-url')
        let fetcher = new Resizing.Rails.Video(url, elem)
        fetcher.fetch()
      })
    })
  }
}

Resizing.Rails.VideoLoader = VideoLoader
