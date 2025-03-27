import {ExemploRepository } from '../../core/domain/repositories/exemplo-repository';
import { HttpClient } from '../http/http-client';

export class Repository implements ExemploRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getExemplo(): Promise<any[]> {
    const response = await this.httpClient.request<any>({
      url: '/',
      method: 'get'
    });
    return response.data;
  }
}