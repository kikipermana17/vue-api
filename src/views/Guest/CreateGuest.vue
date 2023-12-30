<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Guest</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Event</label>
                    <input type="text" v-model="model.guest.event_id" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.guest.name" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" v-model="model.guest.email" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Phone</label>
                    <input type="text" v-model="model.guest.phone_number" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">From</label>
                    <input type="text" v-model="model.guest.from" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Date</label>
                    <input type="date" v-model="model.guest.date_time" class="form-control">
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveGuest" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    name: 'createGuest',
    data() {
        return {
            model: {
                guest : {
                    event_id: '',
                    name: '',
                    email: '',
                    phone_number: '',
                    from: '',
                    date_time: '',
                }
            }
        }
    },
    methods: {
        saveGuest(){
            axios.post('http://127.0.0.1:8000/api/guest', this.model.guest)
            .then(response => {
                console.log(response)
                alert(response.data.message);
                this.model.guest = {
                    event_id: '',
                    name: '',
                    email: '',
                    phone_number: '',
                    from: '',
                    date_time: '',
                }
            }).catch(function (error) {
                console.log(error)
            });
        }
    },
};
</script>