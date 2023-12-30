<template>
  <div class="guest">
    <div class="container mt-5">
      <div class="card">
      <div class="card-header">
        <h4>
          Data Guest
          <router-link to="/guest/create" class="btn btn-primary float-end">Add Guest</router-link>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>from</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(gues, index) in this.guest" :key="index">
              <td>{{ gues.id }}</td>
              <td>{{ gues.event_id }}</td>
              <td>{{ gues.name }}</td>
              <td>{{ gues.email }}</td>
              <td>{{ gues.phone_number }}</td>
              <td>{{ gues.from }}</td>
              <td>{{ gues.date_time }}</td>
              <td>
                <!-- <router-link :to="{path: '/event/'+even.id+'/edit'}" class="btn btn-success mx-2">Edit</router-link> -->
                <router-link to="/guest/edit" class="btn btn-success mx-2">Edit</router-link>
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
  name: 'guest',
  data(){
    return {
      guest: []
    }
  },
  mounted() {
    // console.log('i am here')
   this.getGuest();
  },
  methods: {
    getGuest(){
      axios.get('http://127.0.0.1:8000/api/guest').then(response => {
        this.guest = response.data.data
        // console.log(event)
      }); 
    }
  },
}
</script>

<style>
</style>
