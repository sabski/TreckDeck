
<script setup lang="ts">
import type ISeries from '@/objects/iSeries';
import type ISeriesSearch from '@/objects/iSeriesSearch';
import SeriesService from '@/services/seriesServise';
import { watchEffect } from 'vue';
import { ref } from "vue";
import SeriesListItem from "../main/SeriesListItem.vue";

const deckName = ref("My starter deck");
const seriesList = ref(Array<ISeries>());
const seriesService = new SeriesService();

watchEffect(async () => {
    seriesService.getAllSeriesBase().then((response) => {
      const searchResponse : ISeriesSearch =  response;
      seriesList.value = searchResponse.series;
    });
})

</script>

<template>
  <div class="main-deck">
    {{ deckName }}
    <SeriesListItem v-for="series in seriesList" :model="series" :key="series.uid" />
  </div>
</template>

<style scoped>

</style>
