import axios, { AxiosInstance } from 'axios';
import { IHttpClient, RequestConfig } from '../contracts/IHttpClient';

export class AxiosHttpClient implements IHttpClient {
  private readonly client: AxiosInstance;

  constructor(client?: AxiosInstance) {
    this.client = client ?? axios.create();
  }

  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    const res = await this.client.get<T>(url, config);
    return res.data as unknown as T;
  }

  async post<T>(url: string, data: any, config?: RequestConfig): Promise<T> {
    const res = await this.client.post<T>(url, data, config);
    return res.data as unknown as T;
  }

  async put<T>(url: string, data: any, config?: RequestConfig): Promise<T> {
    const res = await this.client.put<T>(url, data, config);
    return res.data as unknown as T;
  }

  async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    const res = await this.client.delete<T>(url, config);
    return res.data as unknown as T;
  }
}


