<template>
  <b-card-group>
    <b-card
      style="padding:20px;"
      border-variant="white"
      v-for="serie in series" :key="serie.uuid"
      :img-src="serie.poster"
    >
    </b-card>
  </b-card-group>
</template>

<script>
//import SeriesHitCard from '~/components/home/SeriesHitCard'

export default {
  props: ['series'],
  //components: { SeriesHitCard }
  methods: {
    celebName (name) {
      const res = name.split(' ')
      return res[0]
    },
    checkUrl(url) {
      const link = url.split('://')
      if (link[0] !== 'https'){
        return process.env.cdnUrl + url
      } else {
        return url
      }
    }
  }
}
</script>

<style scoped>

</style>