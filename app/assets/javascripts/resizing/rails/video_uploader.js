// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.Resizing ||= {}
window.Resizing.Rails ||= {}

class VideoUploader {
  constructor(file_field, prepare_url) {
    this.file_field = file_field
    this.submit = submit
    this.prepare_url = prepare_url
    this.callback = null
  }

  upload() {
    let file = this.file_field.files[0]
    if(file === undefined) {
      console.log(this.file_field, 'no file found')
      return
    }
    this.prepare(file.name)
  }

  prepare(filename) {
    let body = JSON.stringify({filename: filename})
    fetch(this.prepare_url, {method: 'POST', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}, body: body})
      .then(response => response.json())
      .then(data => this.uploadFile(data))
  }

  uploadFile(record) {
    let file = this.file_field.files[0]
    fetch(record.s3_presigned_url, {method: 'PUT', credentials: 'same-origin', headers: {'Content-Type': file.type}, body: file})
      .then(response => console.log(response))
      .then(data => this.uploadDone(record))
  }

  uploadDone(record) {
    fetch(record.upload_completed_url, {method: 'PUT', credentials: 'same-origin', headers:{'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => this.monitorState(data))
  }

  monitorState(record) {
    setTimeout(()=> {
      fetch(record.self_url, {method: 'GET', credentials: 'same-origin', headers:{'Content-Type': 'application/json'}})
        .then(response => response.json())
        .then(data => {
          this.monitorState(record)
        })
    }, 5000)
  }

  addEventListener(callback) {
    this.callback = callback
  }
}

window.Resizing.Rails.VideoUploader = VideoUploader
