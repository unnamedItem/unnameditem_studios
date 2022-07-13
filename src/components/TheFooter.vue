<template>
    <div>
        <div class="px-lg-5 px-3 d-none d-sm-flex justify-content-between">
            <b-nav class="my-auto">
                <b-nav-item href="https://www.instagram.com/unnameditem.studios/" target="_blank">
                    <b-icon icon="instagram"></b-icon>
                </b-nav-item>
                <b-nav-item href="https://www.linkedin.com/in/franco-cusmai-02a973210/" target="_blank">
                    <b-icon icon="linkedin"></b-icon>
                </b-nav-item>
                <b-nav-item href="https://github.com/unnamedItem" target="_blank">
                    <b-icon icon="github"></b-icon>
                </b-nav-item>
            </b-nav>

            <b-nav>
                <b-navbar-brand>© 2022 Unnamed Item Studios</b-navbar-brand>
            </b-nav>

            <b-nav class="d-flex justify-content-end">
                <b-nav-item-dropdown :text="$t('settings')" dropup>
                    <b-dropdown-text>{{$t('languaje')}}</b-dropdown-text>

                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item @click="$i18n.locale = 'es'">
                        <span><img src="@/assets/flags/es.png" width="30" height="18"> {{$t('spanish')}}</span>
                    </b-dropdown-item>
                    <b-dropdown-item @click="$i18n.locale = 'en'">
                        <span><img src="@/assets/flags/uk.png" width="30" height="18"> {{$t('english')}}</span>
                    </b-dropdown-item>

                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item @click="$theme.switch()">
                        <b-icon :icon="$theme.color == $theme.dark ? 'moon' : 'sun'"></b-icon> {{$t($theme.color)}}
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>
        </div>

        <div class="d-flex d-sm-none">
            <b-row class="mx-0" style="width: 100%">
                <b-col cols="12" class="d-flex justify-content-center">
                    <b-navbar-brand>© 2022 Unnamed Item Studios</b-navbar-brand>
                </b-col>
                <b-col cols="12" class="d-flex justify-content-center">
                    <a href="https://www.instagram.com/unnameditem.studios/" target="_blank">
                        <b-icon type="button" variant="white-2" class="m-3 icon-focus" icon="instagram" scale="1.8"></b-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/franco-cusmai-02a973210/" target="_blank">
                        <b-icon type="button" variant="white-2" class="m-3 icon-focus" icon="linkedin" scale="1.8"></b-icon>
                    </a>
                    <a href="https://github.com/unnamedItem" target="_blank">
                        <b-icon type="button" variant="white-2" class="m-3 icon-focus" icon="github" scale="1.8"></b-icon>
                    </a>
                </b-col>
                <b-col cols="12" class="d-flex justify-content-center">
                    <b-dropdown size="sm" variant="none" :text="$t('settings')" dropup>
                        <b-dropdown-text>{{$t('languaje')}}</b-dropdown-text>

                        <b-dropdown-divider></b-dropdown-divider>

                        <b-dropdown-item @click="$i18n.locale = 'es'">
                            <span><img src="@/assets/flags/es.png" width="30" height="18"> {{$t('spanish')}}</span>
                        </b-dropdown-item>
                        <b-dropdown-item @click="$i18n.locale = 'en'">
                            <span><img src="@/assets/flags/uk.png" width="30" height="18"> {{$t('english')}}</span>
                        </b-dropdown-item>

                        <b-dropdown-divider></b-dropdown-divider>

                        <b-dropdown-item @click="$theme.switch()">
                            <b-icon :icon="$theme.color == $theme.dark ? 'moon' : 'sun'"></b-icon> {{$t($theme.color)}}
                        </b-dropdown-item>
                    </b-dropdown>
                </b-col>
            </b-row>
        </div>
    </div>
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

    .dropdown-toggle:hover {
        color: var(--bs-green);
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

    .icon-focus:hover {
        color: var(--bs-green) !important;
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