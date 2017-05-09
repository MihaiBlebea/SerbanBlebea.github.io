<template>
    <div class="content centered">
        <i class="icon fa fa-facebook-square" aria-hidden="true"></i>
        <i class="icon fa fa-linkedin-square" aria-hidden="true"></i>
        <i class="icon fa fa-github" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
  name: 'social_buttons',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content {
    padding: 0;
}

.icon {
    color: #000;
    opacity: 0.7;
    font-size: 30px;
    transition: color 0.5s ease-in;
    margin-right: 5px;
    margin-left: 5px;
}

.icon:hover {
    color: #2f82ff;
}
</style>
