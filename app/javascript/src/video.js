class Video {
  constructor(element) {
    this.element = element
    this.element
  }

  upload() {
    file = this.element.files[0]
    prepare(file.name)
  }

  prepare(filename) {
    body = JSON.stringify({filename: filename})
    fetch(prepare_url, {method: 'POST', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}, body: body})
      .then(response => response.json())
      .then(data => console.log(data))
  }

  file_upload(record) {
    file = this.element.files[0]
    fetch(record.s3_presigned_url, {method: 'PUT', credentials: 'same-origin', headers: {'Content-Type': file.type}, body: file})
      .then(response => console.log(response))
      .then(data => done_upload(record))
  }

  done_upload(record) {
    fetch(record.upload_completed_url, {method: 'PUT', credentials: 'same-origin', headers:{'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => monitor_state(data))
  }

  monitor_state(record) {
    alert('uploaded')
  }

  // monitor_state(record) {
  //   _record = record
  //   intervalID = setInternal(() => fetch(_record.self_url, method: 'GET', credentials: 'same-origin', headers:{'Content-Type': 'application/json'})
  // }
}

export { Video }
