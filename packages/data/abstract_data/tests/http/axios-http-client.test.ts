import { AxiosHttpClient } from '../../src/http/AxiosHttpClient';

describe('AxiosHttpClient', () => {
  it('constructs without error', () => {
    const client = new AxiosHttpClient();
    expect(client).toBeTruthy();
  });
});


