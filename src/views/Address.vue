<template>
    <div class="address">
        <AddressSelection></AddressSelection>
    </div>
</template>

<script>
import AddressSelection from '@/components/AddressSelection.vue'

export default {
    name: 'address',
    components: {
        AddressSelection,
    },
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>

<style>
.address{
    width: 880px;
}
</style>
