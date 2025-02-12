export interface HttpRequest {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    data?: any;
    params?: any;
    headers?: Record<string, string>;
}

export interface HttpResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
}

export interface HttpClient {
    request<T>(config: HttpRequest): Promise<HttpResponse<T>>;
}