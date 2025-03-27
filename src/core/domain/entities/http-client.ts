export interface HttpRequest {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  body?: any;
  headers?: Record<string, string>;
}

export interface HttpResponse<T> {
  data: T;
  status:number
}

export interface HttpClient {
  request<T>(params: HttpRequest): Promise<HttpResponse<T>>;
}