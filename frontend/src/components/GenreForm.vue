<template>
    <div>
    <b-form @submit="onSubmit"  @reset="onReset" >
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="Provide a genre label."

        :invalid-feedback="invalidFeedback"
        :valid-feedback="validFeedback"
        :state="state"
      >
        <b-form-input
          id="input-1"
          v-model="form.label"
          required
          placeholder="Label"
        ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-around">
        <b-button class="pb-2" type="submit" variant="primary">Submit</b-button>
        <b-button class="pb-2" type="reset" variant="danger">Reset</b-button>
        </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name : 'GenreForm',
    data() {
        return {
            form : {
                label: ''
            }
        }
    },
    methods: {
        onReset(evt) {
            evt.preventDefault()
            this.form.label = ''
        },
        onSubmit(evt) {
                   evt.preventDefault()
                axios.post('http://localhost:3000/genres', this.form).then((res) => this.$emit('newGenreAdded', res.data));

        }
    },
    computed: {
        invalidFeedback() {
              if (this.form.label.length == 0 ) {
                return 'Please, write a label'
              } else if (this.form.label.length < 3 ) {
                return 'Label must contains at lease three characters'
              } else {
                return '';
              }
            
        },
        validFeedback() {
            return this.state === true ? 'Thank you' : '' 
        },
        state() {
            return this.form.label.length >= 2
        }
    }
}
</script>

<style>

</style>