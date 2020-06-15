export default function ({ store, app }) {
  //console.log('auth', app.$auth)
  if (app.$auth.$state.loggedIn) {
    //console.log('login')
    const user = {}
    switch (app.$auth.$state.strategy) {
      case 'auth0':
        user.sub_id = app.$auth.$state.user.sub
        user.name = app.$auth.$state.user.name
        user.picture = app.$auth.$state.user.picture
        user.email = app.$auth.$state.user.email
        break
      case 'facebook':
        user.sub_id = app.$auth.$state.strategy + '|' + app.$auth.$state.user.id
        user.name = app.$auth.$state.user.name
        user.picture = app.$auth.$state.user.picture.data.url
        user.email = app.$auth.$state.user.email
        break
      case 'google':
        user.sub_id = app.$auth.$state.strategy + '-oauth2|' + app.$auth.$state.user.sub
        user.name = app.$auth.$state.user.name
        user.picture = app.$auth.$state.user.picture
        user.email = app.$auth.$state.user.email
        break
    }
    store.dispatch('users/setUser', user)
    if (process.env.adminSubId === user.sub_id) {
      store.dispatch('users/setAdmin')
    }
  }
}
