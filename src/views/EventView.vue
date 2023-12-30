<template>
  <div class="event">
    <div class="container mt-5">
      <div class="card">
      <div class="card-header">
        <h4>
          Data Event
          <router-link to="/event/create" class="btn btn-primary float-end">Add Event</router-link>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(even, index) in this.event" :key="index">
              <td>{{ even.id }}</td>
              <td>{{ even.name_event }}</td>
              <td>{{ even.date }}</td>
              <td>{{ even.location }}</td>
              <td>
                <!-- <router-link :to="{path: '/event/'+even.id+'/edit'}" class="btn btn-success mx-2">Edit</router-link> -->
                <router-link to="/event/edit" class="btn btn-success mx-2">Edit</router-link>
                <button type="button" class="btn btn-danger mx-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'event',
  data(){
    return {
      event: []
    }
  },
  mounted() {
    // console.log('i am here')
   this.getEvent();
  },
  methods: {
    getEvent(){
      axios.get('http://127.0.0.1:8000/api/event').then(response => {
        this.event = response.data.data
        // console.log(event)
      }).catch ((err) => {
        console.log(err);
      })
    }
  },
}
</script>

<style>
</style>
