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
                name: 'ACR System - 15mm Rods Adapter',
                description: "Here's the story of a man.",
                price: 12.00,
                productID: 1,
            }]
        }
    }
}
</script>