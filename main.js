const notificationItems = document.querySelectorAll('.notifications-item')
const notificationsCount = document.getElementById('count')
const markBtn = document.getElementById('mark-all-read')

function calculateCount() {
  const unreadCount = [...notificationItems].filter(item => item.classList.contains('unread')).length
  notificationsCount.textContent = unreadCount

  if (!unreadCount) {
    notificationsCount.classList.add('hidden')
  } else {
    notificationsCount.classList.remove('hidden')
  }
}

function markRead(element) {
  if (!element.classList.contains('unread')) return
  element.classList.remove('unread')
  calculateCount()
}

function markAllRead() {
  notificationItems.forEach(item => markRead(item))
}

notificationItems.forEach(item => item.addEventListener('click', event => markRead(event.currentTarget)))
markBtn.addEventListener('click', markAllRead)
