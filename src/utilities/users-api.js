import { getToken } from "./users-service";

const BASE_URL = '/api/users';

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  //alert(token)
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

export async function signUp(userData) {
  return sendRequest(`${BASE_URL}`,'POST',userData)
}


export async function signIn(userData) {
  return sendRequest(`${BASE_URL}/login`,'POST',userData)
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}



