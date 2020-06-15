<template>
  <b-card-group>
    <b-card
      style="padding:20px;"
      border-variant="white"
      v-for="episode in episodes" :key="episode.uuid"
      :img-src="episode.field_thumbnail.url"
      :title="episode.field_series_episode.title + ' ' + episode.title"
      img-top
    >
    </b-card>
  </b-card-group>
</template>

<script>
export default {
    props: ['episodes'],
    mounted() {
      console.log(this.episodes)
    }
}
</script>