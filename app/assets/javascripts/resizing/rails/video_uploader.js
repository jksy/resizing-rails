// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.Resizing ||= {}
window.Resizing.Rails ||= {}

class VideoUploader {
  constructor(file_field, prepare_url) {
    this.file_field = file_field
    this.prepare_url = prepare_url
    this.callback = null
  }

  upload() {
    let file = this.file_field.files[0]
    if(file === undefined) {
      this.call('no_file_found', null)
      return
    }
    this.prepare(file.name)
    .catch(error => {
      this.call('upload_failed', error)
    })
  }

  prepare(filename) {
    let body = JSON.stringify({filename: filename})
    return fetch(this.prepare_url, {method: 'POST', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}, body: body})
      .then(response => {
        if(!response.ok) {
          return Promise.reject(response)
        }
        return response.json()
      }).then(record => {
        return this.uploadFile(record)
      })
  }

  uploadFile(record) {
    let file = this.file_field.files[0]
    let s3_presigned_url = record.data?.s3_presigned_url || record.s3_presigned_url
    return fetch(s3_presigned_url, {method: 'PUT', credentials: 'same-origin', headers: {'Content-Type': file.type}, body: file})
      .then(response => {
        if(!response.ok) {
          return Promise.reject(response)
        }
        // ignore response body
      }).then(data => {
        return this.uploadDone(record)
      })
  }

  uploadDone(record) {
    let upload_completed_url = record.data?.upload_completed_url || record.upload_completed_url
    return fetch(upload_completed_url, {method: 'PUT', credentials: 'same-origin', headers:{'Content-Type': 'application/json'}})
      .then(response => {
        if(!response.ok) {
          return Promise.reject(response)
        }
        return response.json()
      }).then(data => {
        this.call('done', data)
      })
  }

  addEventListener(callback) {
    this.callback = callback
  }

  call(state, error) {
    if(this.callback !== undefined) {
      this.callback(state, error)
    }
  }
}

window.Resizing.Rails.VideoUploader = VideoUploader
