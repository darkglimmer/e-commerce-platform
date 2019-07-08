<template>
    <div class="notes">
        <Note v-for="note in notes" :key="note.productID" :name="note.name" :description="note.description" :price="note.price">   
        </Note>
    </div>
</template>

<script>
import Note from '@/components/Note.vue'

export default {
    name: 'note',
    components: {
        Note
    },
    data() {
        return {
            notes: [{
                name: '家用可爱柔软章鱼公仔',
                description: "拿来垫屁股可带劲儿了",
                price: 12.99,
                productID: 1,
            }]
        }
    }
}
</script>