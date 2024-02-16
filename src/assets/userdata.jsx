import pct from "../assets/profile.jpg";
const UserData = {
    name: "PlussUserawda",
    at: "@pluss2004",
    pct
}
export function TweetGenerator(datos){
    const tweets = []
    datos.map((e, i)=>{
        let reactions = Math.floor(Math.random() * 900);
        let time =  Math.floor(Math.random() * 59)
        tweets.push({
            text: e.content,
            love: reactions,
            rt: Math.floor(reactions * 0.60),
            comment: Math.floor(reactions * 0.40),
            chart: Math.floor(reactions * 1.1),
            time: (time>0) ? time+"m":"Now",
            user: i
        })
    })
    return tweets
}

export function UserGenerator(datos){
    const users = []
    datos.map(e=>{
        users.push({
            name: e.name.first,
            at: "@"+e.login.username,
            pct: e.picture.thumbnail
        })
    })
    return users
}
export default UserData