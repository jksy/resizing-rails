if(window.Resizing === undefined) { window.Resizing = {} }
if(window.Resizing.Rails === undefined) { window.Resizing.Rails = {} }

class VideoFetcher {
  constructor(self_url) {
    this.self_url = self_url
  }

  fetch() {
    return fetch(this.self_url, {method: 'GET', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}})
    .then(response => response.json())
  }
}

window.Resizing.Rails.VideoFetcher = VideoFetcher
