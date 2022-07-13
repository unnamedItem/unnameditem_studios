const request = require('request');

const IG_CLIENT_ID = process.env.IG_CLIENT_ID;
const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;

function getMedia() {
    return new Promise(function(resolve, reject) {
        request({
            uri: `https://graph.facebook.com/v14.0/${IG_CLIENT_ID}/media`,
            qs: {
                access_token: IG_ACCESS_TOKEN
            }
        }, function(error, response, body) {
            resolve(body)
        });
    })
}

function getProfile() {
    return new Promise(function(resolve, reject) {
        request({
            uri: `https://graph.facebook.com/v14.0/${IG_CLIENT_ID}`,
            qs: {
                fields: 'profile_picture_url',
                access_token: IG_ACCESS_TOKEN
            }
        }, function(error, response, body) {
            resolve(body)
        });
    })
}

function getMediaContent(mediaId) {
    return new Promise(function(resolve, reject) {
        request({
            uri: `https://graph.facebook.com/v14.0/${mediaId}`,
            qs: {
                fields: 'caption,media_url,timestamp',
                access_token: IG_ACCESS_TOKEN
            }
        }, function(error, response, body) {
            resolve(body)
        });
    }) 
}

module.exports = {
    getMedia,
    getMediaContent,
    getProfile
}