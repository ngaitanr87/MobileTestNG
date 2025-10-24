import axios from 'axios';
export class AxiosHttpClient {
    client;
    constructor(client) {
        this.client = client ?? axios.create();
    }
    async get(url, config) {
        const res = await this.client.get(url, config);
        return res.data;
    }
    async post(url, data, config) {
        const res = await this.client.post(url, data, config);
        return res.data;
    }
    async put(url, data, config) {
        const res = await this.client.put(url, data, config);
        return res.data;
    }
    async delete(url, config) {
        const res = await this.client.delete(url, config);
        return res.data;
    }
}
//# sourceMappingURL=AxiosHttpClient.js.map