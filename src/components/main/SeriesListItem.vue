
<script setup lang="ts">
    import Series from '@/objects/series';
import { computed } from 'vue';
    const props = defineProps({ series: Series });
    const currentSeries = props.series;

    const seriesLink = computed(() => {
      return "/series/" + currentSeries?.uid;
    });
</script>

<template>
  <div class="seriesItem">
    <a :href="seriesLink" >
      {{
            currentSeries.title
      }}
    </a>
  </div>
</template>

<style scoped>

</style>
