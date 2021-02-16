window.Resizing ||= {}
window.Resizing.Rails ||= {}

// Usage
// toast = new Resizing.Rails.Toast()
// toast.show('title', 'body-text')
//
class Toast {
  constructor() {
    this.container = document.getElementById('toast-container')
    this.template = document.getElementById('toast-template').content
  }

  show(title, text) {
    let $node = document.importNode(this.template, true)
    let $toast = $node.querySelector('.toast')
    let id = $toast.id = `toast-${this.generateUniqueId()}`
    $node.querySelector('.toast-title').textContent = title
    $node.querySelector('.toast-body').textContent = text
    this.container.appendChild($node)

    let $elem = document.getElementById(id)
    let t = new bootstrap.Toast($elem)
    t.show()
    $elem.addEventListener('hidden.bs.toast',() => {
      $elem.remove()
    })
  }

  generateUniqueId() {
    return (new Date).getTime().toString(16)
  }
}

window.Resizing.Rails.Toast = Toast
