<template>
    <div>
        <b-card no-body>
            <b-row no-gutters>
            <b-col cols="12" sm="6">
                <b-card-img :src="media.media_url"></b-card-img>
            </b-col>
            <b-col cols="12" sm="6" align-self="stretch">
                <b-card-body>
                    <b-card-text>
                        {{media.caption}}
                    </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>

            <b-card-footer class="mt-3 text-start">
            <small>{{$t('posted')}} {{media.timestamp.slice(0,10)}}</small>
            </b-card-footer>
        </b-card>
    </div>
</template>


<i18n>
{
    "en": {
        "posted": "Posted on"
    },

    "es": {
        "posted": "Publicado el"
    }
}
</i18n>



<script>
export default {
    name: 'BaseMedia',

    props: {
        media: {
            type: Object,
            required: true
        }
    }
}
</script>