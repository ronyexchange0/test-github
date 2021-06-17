<template>
    <div class="navbar">
        <nav class="w-100">

            <router-link to="/">
                <img alt="Vue logo" width="80" src="../assets/logo.png">
            </router-link>

            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>

                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
    

    .navbar nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar nav li {
        list-style: none;
        padding-right: 15px;
        padding-left: 15px
    }

    
</style>
