<template>
    <div class="classify">
        &nbsp;&nbsp;
        <div style="display: inline-block; margin-left: 0;">
            <span>📡</span>
        </div>
        &nbsp;&nbsp;
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
    width: 250px;
    height: 55px;
    line-height: 55px;
    font-weight: bold;
    border: 1px #526574 solid;
}
.category{
    font-size: 18px;
    color: #526574;
    margin-left: 10px;
}
</style>
