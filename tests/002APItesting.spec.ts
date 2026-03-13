import { test, expect, request, APIResponse } from '@playwright/test';

test('GET request test', async ({ request }) => {
    const response = await request.get('http://localhost:3000/students/1');
    const response2 = await request.get('http://localhost:3000/students/');
    //const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    console.log("Response status:", response.status());
    expect(response.status()).toBe(200);
    const responseObject = await response.json();
    console.log(responseObject);
    expect(responseObject.id).toBe('1');
    expect(responseObject.name).toBe('Alexander');
    expect(responseObject.location).toBe('Russia');
});

test('GET request test2', async ({ request }) => {
    const response = await request.get('http://localhost:3000/students/');
    console.log("Response status:", response.status());
    expect(response.status()).toBe(200);
    const responseObject = await response.json();
    console.log(responseObject);
    expect(responseObject.students[0].id).toBe('1');
    expect(responseObject.students[0].name).toBe('Alexander');
    expect(responseObject.students[0].location).toBe('Russia');
});

test('POST request test', async ({ request }) => {
    const postData = {
        "student": {
            "name": "John",
            "lastName": "Doe",
            "age": 30
        }
    };
    const response = await request.post('http://localhost:3000/students', {
        data: postData
    });
    console.log("Response status:", response.status());
    expect(response.status()).toBe(200);
});