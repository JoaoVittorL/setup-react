import { HttpClient, HttpRequest, HttpResponse } from '@/core/domain/entities/http-client';
import { env } from '@/env';
import axios, { AxiosInstance } from 'axios';

export class AxiosAdapter implements HttpClient {
  private api: AxiosInstance;

  constructor(baseURL: string = env.VITE_API_URL) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.api.interceptors.request.use((config) => {
      // const token = localStorage.getItem('token');
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
        config.headers.Authorization = `Bearer `;
      return config;
    });
  }

  async request<T>(config: HttpRequest): Promise<HttpResponse<T>> {
    try {
      const response = await this.api.request({
        ...config,
        method: config.method.toLowerCase(),
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      if (error.response) {
        return {
          data: error.response.data,
          status: error.response.status,
        };
      }
      throw error;
    }
  }
}