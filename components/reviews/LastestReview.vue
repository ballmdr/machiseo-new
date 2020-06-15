<template>
  <b-container>
    <b-row v-for="review in reviews" :key="review._id">
      <b-col>
        <b-card class="box-shadow"><review-compact :review="review"></review-compact></b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ReviewCompact from '~/components/reviews/ReviewCompact'

export default {
  props: ['reviews'],
  components: { ReviewCompact }
}
</script>

<style scoped>

</style>