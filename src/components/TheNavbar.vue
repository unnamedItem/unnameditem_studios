<template>
    <b-navbar variant="dark" class="d-flex justify-content-center" sticky>
        <b-nav>
            <b-nav-item class="border-right border-left">Home</b-nav-item>
            <b-nav-item class="border-right">Projects</b-nav-item>
            <b-navbar-brand style="margin: auto">
                <img src="@/assets/unnameditem_token.png" width="40" height="40">
            </b-navbar-brand>
            <b-nav-item class="border-left">Blog</b-nav-item>
            <b-nav-item class="border-right border-left">Contact</b-nav-item>
        </b-nav>
    </b-navbar>
</template>


<script>
export default {
    name: 'nav-bar'
}
</script>


<style lang="scss">
#nav {
    a { 
        color: var(--bs-white-1);
    }

    .nav-item {
        min-width: 120px;
        text-align: center;
        font-size: 25px;

        border-right: 1px solid var(--bs-white-1);
        border-left: 1px solid var(--bs-white-1);
        border-radius: 10px;

        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>