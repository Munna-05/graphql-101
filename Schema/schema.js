export const typeDefs = `#graphql
    type GameType{
        id:ID!
        title:String!
        platform:[String]!
        reviews:[Review!]!
    }
    type Review{
        id:ID!
        rating:Int!
        content:String!
        game:GameType!
        auther:Auther!
    }
    type Auther{
        id:ID!
        name:String!
        verified:Boolean!
        reviews:[Review!]
    }
    type Query{
        reviews:[Review]
        games:[GameType]
        authers:[Auther]
        auther(id:ID!):Auther
        review(id:ID!):Review
        game(id:ID!):GameType

    }
`