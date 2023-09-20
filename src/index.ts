import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema });

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

const port = process.env.API_PORT || 4000;

// Start the server and you're done!
server.listen(port);
