import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import { typeDefs } from "./Schema/schema.js";
import { resolvers } from "./Resolvers/resolvers.js";
const server = new ApolloServer({

    typeDefs,

    //resolvers
    resolvers


})

await startStandaloneServer(server,{port:4000}).then(({url}) => {
console.log("🚀 ~ server started at http://localhost:4000" )
    
})
