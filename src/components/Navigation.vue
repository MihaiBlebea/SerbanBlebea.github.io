<template>
    <div>
        <div id="navigation" class="navigation">
            <div class="nav-items left">
                <a id="nav_item_1" class="nav-item" href="home.php#nav_item_1">Home</a>
                <a id="nav_item_0" class="nav-item" href="form.php#nav_item_0">Blog</a>
                <a id="nav_item_2" class="nav-item" href="form.php#nav_item_2">Contact</a>
            </div>
            <div class="nav-mobile-items">
                <span id="nav-mobile-item" class="nav-mobile-item" onclick="showDropdown('dropdown_1');">Mobile</span>
            </div>

            <div class="nav-items right">
                <a class="nav-item" href="home.php#nav_item_1"><i class="icon fa fa-facebook-square" aria-hidden="true"></i></a>
                <a class="nav-item" href="form.php#nav_item_0"><i class="icon fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a class="nav-item" href="form.php#nav_item_2"><i class="icon fa fa-github" aria-hidden="true"></i></a>
            </div>
        </div>

        <div id="dropdown_1" class="nav-mobile-dropdown">
            <ul>
                <li><a href="">Test 1</a></li>
                <li><a href="">Test 2</a></li>
                <li><a href="">Test 3</a></li>
                <li><a onclick="hideDropdown();">Close</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    data () {
        return {
        }
    },
    mounted() {
        document.onscroll = function() {
            if (window.scrollY >= 80) {
                document.getElementById('navigation').className = "navigation is-hidden";
            } else {
                document.getElementById('navigation').className = "navigation";
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-items.left {
    margin-left: 65px;
}

.nav-items.right {
    margin-right: 65px;
}

.icon {
    font-size: 21px;
    padding: 0;
}

</style>
