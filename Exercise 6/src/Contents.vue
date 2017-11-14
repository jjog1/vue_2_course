<template>
    <div>
        <leftcolumn></leftcolumn>
        <rightcolumn></rightcolumn>
    </div>
</template>


<script>
import LeftColumn from './LeftColumn.vue'
import RightColumn from './RightColumn.vue'
export default {
  components: {
      'leftcolumn': LeftColumn,
      'rightcolumn': RightColumn
  }
}
</script>
