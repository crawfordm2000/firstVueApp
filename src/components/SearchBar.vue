<template>
    <div>
         <!--   -->
        <input @input="onInput" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event){
            // data will be emitted to App
            this.$emit('termChange', event.target.value);
        }
    }
};
</script>


<style scoped>
    input {
        width: 75%;

    }

    div {
        text-align: center;
        margin: 20px;
    }
</style>