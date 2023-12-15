import sendRequest from "./send-request";
const BASE_URL = "/api/notes";

export async function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}

export async function create(note) {
  return sendRequest(`${BASE_URL}`, "POST", note);
}
