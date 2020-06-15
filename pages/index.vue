<template>
  <div>
    <b-container>
      <b-row>
        <b-col justify-center align-center>
          <series-hit :series="seriesHit"></series-hit>
        </b-col>
      </b-row>
    </b-container>
    <b-container style="margin-top:10px;">
      <b-row>
        <b-col>
          <h4>สปอยด์ซีรีส์เกาหลี ตอนล่าสุด</h4>
          <hr>
          <latest-episodes :episodes="episodes"></latest-episodes>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <h4>รีวิวล่าสุด</h4>
          <hr>
          <lastest-review :reviews="reviews"></lastest-review>
        </b-col>
        <b-col>
          <h4>รีวิวแนะนำ</h4>
          <hr>
          <best-review :reviews="best_reviews"></best-review>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LastestReview from '~/components/reviews/LastestReview'
import BestReview from '~/components/reviews/BestReview'
import SeriesHit from '~/components/SeriesHit'
import LatestEpisodes from '~/components/episodes/LatestEpisodes'
import { getLatestEpisodes } from '~/assets/js/api'

export default {
  mounted() {
    console.log(this.reviews)
  },
  components: { LastestReview, BestReview, SeriesHit, LatestEpisodes },
  async asyncData ({ app, env }) {
    const seriesHit = await app.$axios.$get(env.restMongoUrl + '/series_hit')
    const reviews = await app.$axios.$get(env.restMongoUrl + '/reviews')
    const best_reviews = await app.$axios.$get(env.restMongoUrl + '/reviews/best')
    const episodes = await getLatestEpisodes(5)
    return { seriesHit, reviews, best_reviews, episodes }
  }
}
</script>

<style scoped>

.InSpotlightToday {
    width: 100%;
    background-color:blueviolet;
    margin: 0 0 20px;
    box-shadow: 0 1px 2px 1px rgba(0,0,0,0.1);
}

</style>