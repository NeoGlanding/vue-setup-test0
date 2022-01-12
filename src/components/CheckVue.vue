<template>
    <h1 class="thissock">My name is <span v-show="visible">{{ name }}</span></h1>
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

<style scoped>
    .thissock {
        color: red;
    }
</style>