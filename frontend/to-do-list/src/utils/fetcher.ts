import { API_URL } from "../configs/envConfig";

const fetcher = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json();
  } catch (e) {
    console.error("Fetch error: ", e);
    throw e;
  }
};

export default fetcher;
