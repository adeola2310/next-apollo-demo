import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { PropsWithChildren } from "react";

const GRAPHQL_ENDPOINT = "https://faker-graphql.now.sh/graphql"

const ApolloRequestClientProvider: React.FC<PropsWithChildren<{}>> = ({children})=>{
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
});
return <ApolloProvider client={client}> {children} </ApolloProvider>
}



export default ApolloRequestClientProvider;