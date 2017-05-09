<template>
    <div class="home">
        <div id="first-line" class="container flex-row">

            <div class="content centered col-1">
                <div class="box with-shadow bg-white">
                    <img id="image-serban" src="../../assets/img/serban.png">
                    <h3>Serban Blebea</h3>
                    <p> I am a self taught programmer, full stack developer and a classic car lover. I enjoy working as a freelancer.</p>
                    <social_buttons></social_buttons>
                </div>
            </div>

            <div id="pannel-right" class="content col-1">
                <h1>Simple code is better code</h1>
                <p class="top">Web developer with both proven back-end and front-end experience and eager to constantly improve my skills and learn new technologies. While my experience with programming is recent, my passion for programming led me to rapidly pick up new skills, technology and frameworks.</p>
                <p class="top">I have developed my own web application (www.justpostit.net) and, also, worked on various projects mainly composed with the following languages/tools: PHP/JavaSCript/HTML/CSS. I am a problem solver, I have strong attention to details and a mindset of efficiency and creativity.</p>

                <h3>Technical skills:</h3>
                <p class="bottom"><strong>Front-end Development:</strong> JavaScript (jQuery), W3CSS – strong knowledge; AJAX, XHTML, CSS (Bootstrap), – working knowledge;</p>
                <p class="bottom"><strong>Back-end Development:</strong>  PHP – strong knowledge; MCV, Laravel Web Development Framework; OOP (Object-oriented programing) - strong knowledge; </p>
                <p class="bottom"><strong>Preferred database management systems:</strong> MySQL, MariaDB</p>
                <p class="bottom"><strong>Implemented APIs:</strong> PayPal, Braintree, Facebook, Twitter, ActiveCampaign</p>
            </div>
        </div>

        <arrow class="arrow"></arrow>

        <div id="second-line" class="container flex-row">
            <project v-for="project in projects" :key="project.id" :name="project.name" :description="project.description" :link="project.link" :image="project.image"></project> 
        </div>

        <arrow class="arrow"></arrow>

        <div id="third-line" class="container flex-row">
            Form
        </div>
    </div>
</template>

<script>
import { Arrow } from './index.js'
import { mapGetters } from 'vuex'

export default {
    name: 'home',
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters({
            projects: 'getProjects',
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
    -webkit-transform: translateZ( 0 );
    transform: translateZ( 0 );
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

#image-serban {
    max-height: 300px;
}

#first-line {
    margin-bottom: 320px;
    margin-top: -20px;
    background-color: #2f82ff;
    height: 320px;
}

#second-line {
    flex-wrap: wrap;
}

.box {
    padding: 15px;
    margin-left: 50px;
    position: relative;
    bottom: -50px;
}

#pannel-right {
    padding: 25px;
    margin-right: 50px;
    position: relative;
    bottom: -50px; 
}

.content {
    text-align: center;
    color: #2f82ff;
}

p.top {
    color: #fff;
    text-align: start;
    margin-bottom: 30px;
}

p.bottom {
    color: #000;
    text-align: start;
}

h1 {
    text-transform: uppercase;
    color: #fff;
}

h3 {
    margin: 10px;
    padding: 0px;
}

.arrow {
    margin: auto;
    text-align: center;
}


</style>
