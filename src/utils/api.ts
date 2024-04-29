import axios from "axios";

export const organization = () => axios.get(`https://my.api.mockaroo.com/organizations.json?key=2e435a20`).then(({ data }) => data);