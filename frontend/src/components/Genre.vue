<template>
  <div>
      <div>
          <b-table striped hover :items="genres" :fields="fields"></b-table>
      </div>
        <div>
            <GenreForm @newGenreAdded="onNewGenreAdded"/>
        </div>
        
  </div>
 
</template>

<script>
import axios from "axios";
  import GenreForm from './GenreForm';
export default {
    name: 'Genre',
    data() {
        return {
            genres : null,
            fields: ["id", "label"]
        }
    },
    mounted() {
        axios.get("http://localhost:3000/genres").then((res) => this.genres= res.data);
    },
    components: {
        GenreForm
    }, 
    methods: {
        onNewGenreAdded(evt) {
            this.genres.push(evt)
        }
    }
    
}
</script>

<style>

</style>