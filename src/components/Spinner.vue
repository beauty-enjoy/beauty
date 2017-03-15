<template>
    <div v-if="loading" class='wrapper'>
        <div class='cell'>
            <PulseLoader color="rgba(255, 56, 96, 0.58)"/>            
        </div>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader'

export default {
  name: 'spinner',
  props: {
    loading: Boolean
  },
  components: {
    PulseLoader
  }
}
</script>

<style lang="scss">
.wrapper {
    text-align:center;
    display: table;
    width: 100%;
    .cell {
        display: table-cell;
        vertical-align: middle;
  }
}
</style>
