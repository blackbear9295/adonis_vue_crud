<template>
  <v-layout class="mt-4">
    <v-flex xs8>
      <v-text-field
        :placeholder="placeholder"
        :value="value"
        @input="$emit('onInput', $event)"
        @keyup.enter="$emit('create', $event)"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs4 text-xl-right>
      <v-btn
        dark
        class="mt-2"
        color="green"
        @click="$emit('create', $event)"
      >
        <v-icon class="mr-2">mdi-plus-circle</v-icon> Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'placeholder',
    'value',
  ],
};
</script>

<style>

</style>
