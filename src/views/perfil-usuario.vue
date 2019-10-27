<template>
    
 
  <div class="text-xs-center">
    <h1>SEU PAITOLA</h1>
    <v-btn
        
      class="white--text"
      color="purple darken-2"
      @click="dialog = true"
    >
      Start loading
    </v-btn>
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
    data () {
      return {
        dialog: false
      }
    },

    watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 1000)
      }
    }
}
</script>