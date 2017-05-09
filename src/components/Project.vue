<template>
    <div class="content centered padding-35">
        <div class="pannel">
            <div class="header is-clipped fixed is-alert">   
                {{ name }}         
            </div>
            <div class="pannel-img">
                <img :src="image">
            </div>
            <div class="body fixed">
                <p>{{ description }}</p>
            </div>
            <div class="control">
                <a v-on:click="showModal" class="item">View project details</a>
            </div>
        </div>
        
        <div :class="modal_class">
            <div v-on:click="hideModal" class="overlay"></div>
            <div class="modal-content">
                <div class="pannel">
                    <div class="header fixed is-primary">
                        {{ name }}    
                    </div>
                    <div class="body">
                        <div class="pannel-hero">
                            <img :src="image">
                        </div>
                        <p>{{ description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from './index.js'
export default {
    name: 'project',
    props: ['name', 'description', 'link', 'image'],
    data () {
        return {
            modal_class: 'modal'
        }
    },
    methods: {
        showModal() {
            this.modal_class = 'modal is-active';
            document.body.className = "noscroll";
        },
        hideModal() {
            this.modal_class = 'modal';
            document.body.className = "";
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content {
    max-width: 400px;
}

.body {
    color: #000;
}

p.body {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.modal.is-active .modal-content {
    position: absolute;
    margin: auto;
}

</style>

