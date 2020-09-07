<template>
    <div class="matrix-wrapper" v-show="show">
        <div class="matrix">
            <p>{{ $t('matrix') }}</p>
            <div id='matrix' class='matrix'></div>
        </div>
    </div>
</template>
<style src="./matrix.css"></style>
<script src="./matrix.js"></script>
