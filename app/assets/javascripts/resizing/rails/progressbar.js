window.Resizing ||= {}
window.Resizing.Rails ||= {}

// Usage
// min = 0
// max = 100
// bar = new Resizing.Rails.ProgressBar(document.querySelector('...'), min, max)
// bar.setCurrent(20)
//

class ProgressBar {
  constructor(element, min, max) {
    this.element = element
    this.current = this.min = min
    this.max = max
  }

  setCurrent(value) {
    this.current = value
    this.applyStyle()
  }

  applyStyle() {
    let percentage = this.current / (this.max - this.min)
    this.element.style = `width: ${percentage}%;`
    this.element.setAttribute('aria-valuenow', this.current)
    this.element.setAttribute('aria-valuemin', this.min)
    this.element.setAttribute('aria-valuemax', this.max)
  }
}

window.Resizing.Rails.ProgressBar = ProgressBar