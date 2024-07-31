import { db } from "../_db.js"
export const resolvers = {
    Query: {
        games: () => db.games,
        reviews: () => db.reviews,
        authers: () => db.auther,
        auther:(parent,args)=>db.auther.find((auther)=>auther.id===args.id),
        review:(parent,args)=>db.reviews.find((review)=>review.id===args.id),
        game:(parent,args)=>db.games.find((game)=>game.id===args.id)
    },
    GameType:{
        reviews(parent){
            return db.reviews.filter((review)=>review.gameId===parent.id)
        }
    },
    Auther:{
        reviews(parent){
            return db.reviews.filter((review)=>review.autherId===parent.id)
        }
    },
    Review:{
        auther(parent){
            return db.auther.find(res=>res.id===parent.autherId)
        },
        game(parent){
            return db.games.find(res=>res.id===parent.gameId)
        }
    }

}