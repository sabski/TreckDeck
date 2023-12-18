
<script setup lang="ts">
import type ISeries from '@/interfaces/iSeries';
import type ISeriesSearch from '@/interfaces/iSeriesSearch';
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

    <SeriesListItem v-if="seriesList.length > 0" v-for="series in seriesList" :series="series" :key="series.uid" />
  </div>
</template>

<style scoped>

</style>
@/interfaces/iSeries@/interfaces/iSeriesSearch