import Api from '@/services/Api'

export default {
    search (search) {
        return Api().get('movies', search)
    }
}