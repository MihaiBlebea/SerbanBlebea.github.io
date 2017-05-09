<template>
    <div>
        <hr>
        <a :href="anchor"><i class="icon fa fa-caret-down" aria-hidden="true"></i></a>
    </div>
</template>

<script>
export default {
  name: 'arrow',
  props: ['anchor'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

hr {
    border: 2px solid #2f82ff;
    opacity: 0.8;
    max-width: 50%;
    border-radius: 10%;
}

.icon { 
    color: #878787;
    font-size: 70px;
    opacity: 0.8;
    transition: color 0.4s ease-in;
}

.icon:hover {
    cursor: pointer;
    color: #2f82ff;
}
</style>
