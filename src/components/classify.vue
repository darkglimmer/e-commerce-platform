<template>
    <div class="classify">
        <span class="category">{{this.category}}</span>
        <i class="el-icon-arrow-right"></i>
    </div>
</template>

<script>

export default {
  name: 'Classify',
  props: {
      category: String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.classify{
    width: 180px;
    height: 40px;
    line-height: 40px;
    border: 2px #526574 dashed;
}
.category{
    font-size: 18px;
    color: #526574;
    margin-left: 10px;
}
</style>
