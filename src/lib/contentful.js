// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: "zggawij42o34", // Add your Space ID
  accessToken: "_SSMqARTowTpHiEi6Q3XJE_wPJzaGqhjYPZu-ljMMVM", // Add your Content Delivery API Key
});

export default client;
