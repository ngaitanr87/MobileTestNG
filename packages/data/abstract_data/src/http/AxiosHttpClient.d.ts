import { AxiosInstance } from 'axios';
import { IHttpClient, RequestConfig } from '../contracts/IHttpClient';
export declare class AxiosHttpClient implements IHttpClient {
    private readonly client;
    constructor(client?: AxiosInstance);
    get<T>(url: string, config?: RequestConfig): Promise<T>;
    post<T>(url: string, data: any, config?: RequestConfig): Promise<T>;
    put<T>(url: string, data: any, config?: RequestConfig): Promise<T>;
    delete<T>(url: string, config?: RequestConfig): Promise<T>;
}
//# sourceMappingURL=AxiosHttpClient.d.ts.map