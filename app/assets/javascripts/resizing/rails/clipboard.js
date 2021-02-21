window.addEventListener('click', (e) => {
  src = e.srcElement
  if(src.hasAttribute('data-copy-url')) {
    url = src.getAttribute('data-copy-url')
    if(url !== null) {
      elem = document.getElementById('clipboard')
      elem.value = url
      elem.select()
      document.execCommand("copy")
      toast = new Resizing.Rails.Toast()
      index = url.lastIndexOf('/')
      toast.show("コピーしました", '...' + url.substr(index, url.length))
    }
  }
})
