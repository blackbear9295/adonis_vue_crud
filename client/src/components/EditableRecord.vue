<template>
  <v-layout>
    <v-flex xs9 class="text-xl-left">
      <span
        @click="$emit('onClick')"
        v-if="!isEditMode"
      >
        {{title}}
      </span>
      <v-text-field
        autofocus
        v-if="isEditMode"
        :value="title"
        @keyup.enter="$emit('onSave')"
        @input="$emit('onInput', $event)"
        ></v-text-field>
    </v-flex>
    <v-flex xs3 class="text-xl-right">
      <v-icon
        class="icon"
        v-if="!isEditMode"
        @click="$emit('onEdit')">
        mdi-pencil
      </v-icon>
      <v-icon
        class="icon"
        v-if="isEditMode"
        @click="$emit('onSave')">
        mdi-check
      </v-icon>
      <v-icon
        class="icon"
        @click="$emit('onDelete')">
        mdi-delete
      </v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'isEditMode',
    'title',
    'record',
  ],
};
</script>

<style>

</style>
