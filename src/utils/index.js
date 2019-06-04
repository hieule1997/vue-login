const KEY_TOKEN = 'auth_token'

export default {
  get_token () {
    return localStorage.getItem(KEY_TOKEN)
  },
  set_token (token) {
    localStorage.setItem(KEY_TOKEN, token)
  },
  logout (link) {
    localStorage.removeItem(KEY_TOKEN)
    location.href = link
  }
}
