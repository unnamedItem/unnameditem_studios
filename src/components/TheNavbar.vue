<template>
    <b-navbar variant="dark" class="d-flex justify-content-center" sticky>
        <b-nav class="d-none d-sm-flex">
            <b-nav-item v-bind:class="[{'active': $route.name === 'Home'}]" @click="navigate('Home')">{{$t('home')}}</b-nav-item>
            <b-nav-item v-bind:class="[{'active': $route.name === 'Projects'}]" @click="navigate('Projects')">{{$t('projects')}}</b-nav-item>
            <b-navbar-brand style="margin: auto">
                <img src="@/assets/unnameditem_token.png" width="40" height="40">
            </b-navbar-brand>
            <b-nav-item v-bind:class="[{'active': $route.name === 'Blog'}]" @click="navigate('Blog')">{{$t('blog')}}</b-nav-item>
            <b-nav-item v-bind:class="[{'active': $route.name === 'Contact'}]" @click="navigate('Contact')">{{$t('contact')}}</b-nav-item>
        </b-nav>

        <b-nav class="d-flex d-sm-none justify-content-center">
            <b-nav-item v-bind:class="[{'active': $route.name === 'Home'}]" @click="navigate('Home')">{{$t('home')}}</b-nav-item>
            <b-nav-item v-bind:class="[{'active': $route.name === 'Projects'}]" @click="navigate('Projects')">{{$t('projects')}}</b-nav-item>
            <b-navbar-brand style="margin: auto">
                <img src="@/assets/unnameditem_token.png" width="40" height="40">
            </b-navbar-brand>
            <b-nav-item v-bind:class="[{'active': $route.name === 'Blog'}]" @click="navigate('Blog')">{{$t('blog')}}</b-nav-item>
            <b-nav-item v-bind:class="[{'active': $route.name === 'Contact'}]" @click="navigate('Contact')">{{$t('contact')}}</b-nav-item>
        </b-nav>
    </b-navbar>
</template>


<i18n>
{
    "en": {
        "home": "Home",
        "blog": "Blog",
        "contact": "Contact",
        "projects": "Projects"
    },

    "es": {
        "home": "Inicio",
        "blog": "Blog",
        "contact": "Contacto",
        "projects": "Proyectos"
    }
}
</i18n>


<script>
export default {
    name: 'nav-bar',

    methods: {
        navigate: function(name) {
            if (this.$route.name != name)
                this.$router.push({name: name});
        }
    }
}
</script>


<style lang="scss">
@media (min-width: 576px) {
    #nav {
        a { 
            color: var(--bs-white-1);
        }

        .nav-item {
            min-width: 130px;
            text-align: center;
            font-size: 25px;
            
            border-right: 1px solid var(--bs-white-1);
            border-left: 1px solid var(--bs-white-1);
            border-radius: 10px;

            margin-left: 10px;
            margin-right: 10px;

            :hover {
                color: var(--bs-green);
                border-right: 1px solid var(--bs-green);
                border-left: 1px solid var(--bs-green);
                border-radius: 10px;
            }
        }

        .active {
            border-right: 1px solid var(--bs-green);
            border-left: 1px solid var(--bs-green);
            border-radius: 10px;
            
            a {
                color: var(--bs-green);
            }
        }
    }
}

@media (max-width: 576px) {
    #nav {
        a { 
            color: var(--bs-white-1);
            font-size: 20px;
            padding-left: 5px;
            padding-right: 5px;
        }
    }

    .nav-item {
        width: 20%;
    }

    .nav {
        width: 90%;
    }
}
</style>