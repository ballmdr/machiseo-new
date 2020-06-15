<template>
    <b-media>
        <template v-slot:aside>
          <!--  <b-img :src="poster" class="poster" width="80" alt="placeholder"></b-img>-->
        </template>
        <h5 class="mt-0"><b-img class="avatar" :src="review.user[0].picture"></b-img> {{ review.user[0].name }}</h5>
        <p class="mb-1">
            {{ $options.filters.truncate(review.review_text, filter, '...') }}
        </p>
    </b-media>
</template>

<script>
import { getSerieById_minimal } from '~/assets/js/api'

export default {
    props: ['review'],
    data () {
        return {
            poster: '',
            filter: 100
        }
    },
    async mounted () {
        if (this.review.serie.length > 0) {
            this.poster = this.checkUrl(this.review.serie[0].poster)
        } else {
            const res = await this.$axios.$get(process.env.restMongoUrl + '/series/' + this.review.serie_id)
            if (res.length > 0) {
                //poster = this.checkUrl(res[0].poster)
            } else {
                // get serie data from drupal
                const res = await getSerieById_minimal(this.review.serie_id)
                //this.poster = this.checkUrl(serie.poster)
                const serie = {
                    serie_id : this.review.serie_id,
                    uuid: res[0].uuid,
                    title: res[0].title,
                    poster: res[0].field_poster[0].url,
                    path: res[0].path.alias
                }
                await this.$axios.$post(process.env.restMongoUrl + '/series/create', serie)
            }
        }
    },
    methods:{
        async getAvatar() {
            const url = "https://ui-avatars.com/api/?name=" + this.reviews.user[0].name
            const img = await this.$axios.$get(url)
            console.log('img', img)
            return img
        },
        checkUrl(url) {
            const link = url.split('://')
            if (link[0] !== 'https'){
                return process.env.cdnUrl + url
            } else {
                return url
            }
        }
    },
}
</script>

<style scoped>
.avatar{
    border-bottom-left-radius: 9999px;
    border-bottom-right-radius: 9999px;
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
}
</style>