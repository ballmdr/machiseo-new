import { setClient } from '~/assets/js/apiClient'

export default ({ app, store }) => {
  setClient(app.$axios)
}