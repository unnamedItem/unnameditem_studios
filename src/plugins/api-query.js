export default {
    install(Vue) {
        const apiQuery = {};

        apiQuery.goFetch = function(url) {
            var opt = { method: 'GET'};
            return fetch(url, opt)
            .then(response => {
                return response.text();
            })
            .then(response => {
                let jsonresp = JSON.parse(response);
                return jsonresp;
            })
            .catch(err => {
                console.log(err);
            })
        }

        Vue.prototype.$apiQuery = apiQuery;
    }
}