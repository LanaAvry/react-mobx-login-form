import mockServer from 'mockserver-client';

const mockServerClient = mockServer.mockServerClient;

mockServerClient('localhost', 8080).mockAnyResponse({
    httpRequest: {
        method: 'POST',
        path: '/login',
        body: {
            type: 'JSON',
            value: JSON.stringify({ Username: 'foo', Password: 'bar' }),
            matchType: 'STRICT'
        }
    },
    httpResponse: {
        statusCode: 200,
        headers: [
            {
                name: 'Content-Type',
                values: ['application/json; charset=utf-8']
            },
            {
                name: 'Cache-Control',
                values: ['public, max-age=86400']
            }
        ],
        body: JSON.stringify({ Auth: 'Denied' }),
        delay: {
            timeUnit: 'SECONDS',
            value: 1
        }
    }
});
