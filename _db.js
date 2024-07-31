const games = [
    {id:"1", title:"Game1", platform:["pc","ps","xbox"]},
    {id:"2", title:"Game2", platform:["pc","xbox"]},
    {id:"3", title:"Game3", platform:["pc","ps"]},
    {id:"4", title:"Game4", platform:["pc","xbox","ps"]},
    {id:"5", title:"Game5", platform:["xbox","ps"]},
    {id:"6", title:"Game6", platform:["pc"]},
    {id:"7", title:"Game7", platform:["xbox","ps","pc"]},
    {id:"8", title:"Game8", platform:["xbox"]},
    {id:"9", title:"Game9", platform:["ps"]},
    {id:"10", title:"Game10", platform:["xbox","ps","pc"]}
]

const reviews = [
    {id:"1", gameId:"1", autherId:"1", rating:4, content:"great game"},
    {id:"2", gameId:"2", autherId:"2", rating:3, content:"okay"},
    {id:"3", gameId:"3", autherId:"3", rating:5, content:"best game ever"},
    {id:"4", gameId:"4", autherId:"4", rating:2, content:"meh"},
    {id:"5", gameId:"5", autherId:"5", rating:4, content:"pretty good"},
    {id:"6", gameId:"6", autherId:"6", rating:1, content:"terrible"},
    {id:"7", gameId:"7", autherId:"7", rating:3, content:"alright"},
    {id:"8", gameId:"8", autherId:"8", rating:5, content:"amazing"},
    {id:"9", gameId:"9", autherId:"9", rating:2, content:"mediocre"},
    {id:"10", gameId:"10", autherId:"10", rating:4, content:"decent"}
]

const auther = [
    {id:"1", name:"Ali", verified:true},
    {id:"2", name:"Ahmad", verified:false},
    {id:"3", name:"Sami", verified:true},
    {id:"4", name:"Rami", verified:false},
    {id:"5", name:"Ahmed", verified:true},
    {id:"6", name:"Zain", verified:false},
    {id:"7", name:"Mohamed", verified:true},
    {id:"8", name:"Mohsen", verified:false},
    {id:"9", name:"Hossein", verified:true},
    {id:"10", name:"Mohammad", verified:false}
]


export const db = {games, reviews, auther}