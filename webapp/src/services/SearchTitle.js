import Api from '@/services/Api'

export default {
  search (title) {
    return Api().get(`movies?search=${title}`, {params: title})
  }
}
