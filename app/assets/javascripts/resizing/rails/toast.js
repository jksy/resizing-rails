window.Resizing ||= {}
window.Resizing.Rails ||= {}

class Toast {
  constructor() {
    this.container = document.getElementById('toast-container')
    this.template = document.getElementById('toast-template').content
  }

  show(title, text) {
    let $node = document.importNode(this.template, true)
    let $toast = $node.querySelector('.toast')
    let id = $toast.id = `toast-${this.generateUniqueId()}`
    let $title = $node.querySelector('.title')
    $title.textContent = title
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

