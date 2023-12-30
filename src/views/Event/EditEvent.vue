<!-- <template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Event</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.event.name_event" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Date</label>
                    <input type="date" v-model="model.event.date" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Location</label>
                    <input type="text" v-model="model.event.location" class="form-control">
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveEvent" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'editEvent',
    data() {
        return {
            model: {
                event : {
                    name_event: '',
                    date: '',
                    location: ''
                }
            }
        }
    },
    mounted() {
        // console.log(this.$route.params.id);
        this.getEventData();
    },
    methods: {
        getEventData(evenId){
            axios.get(`http://127.0.0.1:8000/api/event/update/${evenId}`)
            .then(response => {
                console.log(response.data);
            });
        }
        saveEvent(){
            axios.post('http://127.0.0.1:8000/api/event', this.model.event)
            .then(response => {
                console.log(response)
                alert(response.data.message);
                this.model.event = {
                    name_event: '',
                    date: '',
                    location: ''
                }
            }).catch(function (error) {
                console.log(error)
            });
        }
    },
};
</script> -->