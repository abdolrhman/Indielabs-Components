console.log('Service Worker Loaded...')

/**
 * [waitinig for event push to assign values on the fly ]
 * @type {[obj]}
 */
self.addEventListener('push', e => {
  const data = e.data.json()
  console.log('Push Recieved...')
  self.registration.showNotification(data.title, {
    body: 'Notified by Abdelrhman',
    icon: 'http://image.ibb.co/jpeHmJ/unnamed.png'
  })
})
