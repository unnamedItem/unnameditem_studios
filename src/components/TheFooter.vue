<template>
    <b-navbar variant="dark" class="px-lg-5 px-3 d-flex justify-content-between">
        <b-nav>
            <b-nav-item>
                <b-icon variant="white-2" icon="instagram"></b-icon>
            </b-nav-item>
            <b-nav-item>
                <b-icon variant="white-2" icon="youtube"></b-icon>
            </b-nav-item>
            <b-nav-item>
                <b-icon variant="white-2" icon="twitter"></b-icon>
            </b-nav-item>
        </b-nav>

        <b-nav>
            <b-navbar-brand>© 2022 Unnamed Item Studios</b-navbar-brand>
        </b-nav>

        <b-nav>
            <b-nav-item-dropdown dropup>
                <template #button-content>
                    Languaje
                </template>

                <b-dropdown-item>A</b-dropdown-item>
                <b-dropdown-item>A</b-dropdown-item>
                <b-dropdown-item>A</b-dropdown-item>
                <b-dropdown-item>A</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </b-navbar>
</template>


<script>
export default {
    name: 'TheFooter'
}
</script>


<style lang="scss">
#footer {
    background-color: var(--bs-dark);
    padding-top: 10px;
    padding-bottom: 10px;

    .navbar-brand {
        color: var(--bs-white-2);
        text-align: center;
        margin: auto;
    }

    .dropdown-toggle {
        color: var(--bs-white-2);
        font-size: 20px;
    }


    .nav {
        width: 33%;
    }

    .nav-item {
        a {
            color: var(--bs-white-2);
        }

        a:hover {
            color: var(--bs-green);
        }
    }
}

.dark-theme #footer {
    .dropdown-menu {
        right: 0;
        top: 0;
        background-color: var(--bs-gray-1);

        a {
            color: var(--bs-dark) !important;
        }
        
        a:hover {
            background-color: var(--bs-green);
        }
    }
}

.light-theme #footer {
    .dropdown-menu {
        right: 0;
        top: 0;
        background-color: var(--bs-white-2);

        a {
            color: var(--bs-dark) !important;
        }
        
        a:hover {
            background-color: var(--bs-green);
        }
    }
}
</style>