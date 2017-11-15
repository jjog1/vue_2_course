<template>
    <div>
        <h1>Quotes Added</h1>
        <div class="quote-progress-bar">
            <div class="progress" :style="progressStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            progressStyle: {
                width: '0%'
            }
        }
    }
}
</script>

<style scoped>
.quote-progress-bar {
    border: 1px solid lightgray;
    width: 100%;
    background-color: white-space;
    height: 4em;
}

.progress {
    background-color: blue;
    height: 4em;
}
</style>

