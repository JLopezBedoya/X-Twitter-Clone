import pct from "../assets/profile0.jpg";
const UserData = {
    name: "PlussUser",
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
export const newsData = [
    {
        topic: "Video Games",
        title: "New TLOU3 trailer",
        posts: "2.5k"
    },
    {
        topic: "Sports",
        title: "Real Madrid wins clásico",
        posts: "3.2k"
    },
    {
        topic: "Anime",
        title: "New Attack on Titan season",
        posts: "1.5k"
    },
    {
        topic: "Technology",
        title: "Apple unveils foldable iPhones",
        posts: "4.4k"
    },
    {
        topic: "Science",
        title: "New Earth-like planet discovered",
        posts: "2.2k"
    },
    {
        topic: "Music",
        title: "Beyoncé announces world tour",
        posts: "7.6k"
    },
    {
        topic: "Movies",
        title: "Beyond the Spiderverse premieres",
        posts: "4.1k"
    },
    {
        topic: "Politics",
        title: "Biden wins re-election",
        posts: "5.3k"
    },
    {
        topic: "Economy",
        title: "Inflation decreases",
        posts: "4.3k"
    },
    {
        topic: "Environment",
        title: "Concerns about climate change rise",
        posts: "1.7k"
    }
];
export default UserData