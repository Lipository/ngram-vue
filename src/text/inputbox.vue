<template>
  <div class='inputBox'>
    <input type='text' id='length' size='5' maxlength='4' @keyup='checkInput()' v-model="tableLength" />
    <label for="length">{{ $t('tableLength') }}</label>
    <input type='text' id='grams' size='2' maxlength='1' @keyup='checkInput()' v-model="countGrams" />
    <label for="grams">-{{ $t('gram') }}</label>
  </div>
</template>
<style src="./inputbox.css"></style>
<script src="./inputbox.js"></script>
