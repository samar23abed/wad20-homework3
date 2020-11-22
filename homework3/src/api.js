import axios from 'axios';

export default class API {
    static async getUserInfo() {
        return axios.get('https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/users/1');

        /*
            {
                "firstname": string,
                "lastname": string,
                "email": string,
                "avatar": string
            }
        */
    }

    static async getPosts() {
        return axios.get('https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/posts');

        /*
            {
                "id": number,
                "author": {
                    "firstname": string,
                    "lastname": string,
                    "avatar": string
                },
                "createTime": string,
                "text": null | string,
                "media": null | {
                    "type": "image" | "video",
                    "url": string
                },
                "likes": string
            }[]
        */
    }

    static async getProfiles() {
        return axios.get('https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/profiles');

        /*
            {
                "firstname": string,
                "lastname": string,
                "avatar": string
            } []
        */
    }
}
