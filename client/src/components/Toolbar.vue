<template>
    <v-card  color="grey lighten-4" flat tile >
      <v-toolbar dense color="green" dark fixed>

        <v-toolbar-title class="mr-4">Vue To Do</v-toolbar-title>
        <v-toolbar-items>
          <v-btn plain  v-if="isLoggedIn">
            <v-icon>mdi-playlist-check</v-icon>
            Projects
          </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items class="mr-4">
          <v-btn plain to="/register" v-if="!isLoggedIn">
            <v-icon class="mr-2">mdi-account-box</v-icon>
            Register
          </v-btn>
          <v-btn plain to="/login" v-if="!isLoggedIn">
            <v-icon class="mr-2">mdi-fingerprint</v-icon>
            Log in
          </v-btn>
          <v-btn plain v-if="isLoggedIn" @click="logout">
            <v-icon class="mr-2">mdi-exit-to-app</v-icon>
            Log Out
          </v-btn>
          <v-btn plain>
            <v-icon class="mr-2">mdi-television-play</v-icon>
            How this was made
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapActions('authentication', [
      'logout',
    ]),
  },
};
</script>
