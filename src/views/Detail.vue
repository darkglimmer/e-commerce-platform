<template>
    <div class="detail">
        <ProductCard></ProductCard>
        <Information></Information>
    </div>
</template>

<script>
import ProductCard from '@/components/Card.vue'
import Information from '@/components/Information.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'detail',
    components: {
        ProductCard,
        Information,
        Footer
    },
    data() {

    }
}
</script>

<style>
.detail{
    width: 100%;
    height: 100vh;
    margin-left: 230px;
    margin-right: 200px;
    padding: 180px  0;
}
</style>

