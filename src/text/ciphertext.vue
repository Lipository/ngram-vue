<template>
  <div id='cipher'>
        <label>{{ $t('ciphertext') }}:</label>
        <textarea name='codtxt' id='codtxt' rows='15' @keypress='keyPress($event.keyCode, "decode");'
                  @keyup='crypt("decode");' wrap='physical' v-model='codtxt'></textarea>
        <div id='displayOptions'>
          <inputBox></inputBox>
          <label v-show='!uppercase || !lowercase' v-if='useCase'>
            <input v-model='casesensitive' name='casesensitiv' type='checkbox' id='casesensitiv' @click='toggleOptions("casesensitive");'/>
            {{ $t('casesensitive') }}
          </label>
          <label v-if='useSigns'>
            <input v-model='signs' name='signs' type='checkbox' id='signs' @click='toggleOptions("signs");'/>
            {{ $t('signstext') }}
          </label>
          <label v-if='useSpaces'>
            <input v-model='ignoreSpaces' name='spaces' type='checkbox' id='spaces' @click='toggleOptions("spaces");'/>
            {{ $t('whitespace') }}
          </label>
          <label v-if='useGroup'>
            <input v-model='showGroup' name='clean' type='checkbox' id='clean' @click='toggleOptions("clean");'/>
            {{ $t('cleanspace') }}
          </label>
        </div>
    </div>
</template>
<script src="./ciphertext.js"></script>
