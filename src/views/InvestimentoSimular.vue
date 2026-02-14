<script setup lang="ts">

import {ref} from 'vue';

const valorInicial = ref(0);
const aporteMensal = ref(0);
const taxaJuros = ref(0);
const periodo = ref(0);

</script>

<template>
    <div class="simulador">
        
    </div>
</template>

<style>
    .simulador {
        display: flex;
        justify-content: space-between;
        padding: 16px;
    }
</style>