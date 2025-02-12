import axios, { AxiosInstance } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from './http-client';

export class AxiosAdapter implements HttpClient {
    private api: AxiosInstance;

    constructor(baseURL: string) {
        this.api = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async request<T>(config: HttpRequest): Promise<HttpResponse<T>> {
        try {
            const response = await this.api.request(config);
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            };
        } catch (error: any) {
            if (error.response) {
                return {
                    data: error.response.data,
                    status: error.response.status,
                    statusText: error.response.statusText,
                    headers: error.response.headers
                };
            }
            throw error;
        }
    }
}