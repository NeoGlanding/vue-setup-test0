<template>
    <h1>My name is <span v-show="visible">{{ name }}</span></h1>
    <button @click="toggler()">Show Name</button>
</template>

<script>
export default {
    data() {
        return {
            name: 'Benjamin Parker',
            visible: false
        }
    },
    methods: {
        toggler() {
            this.visible = !this.visible
        }
    }
}
</script>