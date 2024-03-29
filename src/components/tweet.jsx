import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark, FaEllipsis } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { useState } from "react";
import { IoStatsChartSharp } from "react-icons/io5";
function Tweet({content, users}){
    const user = users[content.user]
    const [love, setLove] = useState(false)
    const [rt, setRt] = useState(false)
    return(
        <section className="tweet">
            <article className="tweet-pct">
                <img src={user.pct} alt="user's photo" />
            </article>
            <article className="tweet-user">
                <span className="tweet-user-name">{user.name}</span>
                <span className="tweet-user-at">{user.at}</span> 
                <span className="tweet-user-at">&#183;</span> 
                <span className="tweet-user-at">{content.time}</span> 
            </article>
            <article style={{textAlign: "center"}}>
                <span className="tweet-user-at"><FaEllipsis /></span> 
            </article>
            <article className="tweet-content">
                {content.text}
            </article>
            <article className="tweet-reactions">
                <span>
                    <FaRegComment />
                    {content.comment}
                </span>
                <span className={(rt)? "rt":""} onClick={()=>setRt(!rt)}>
                    <FaRetweet />
                    {content.rt+((rt)?1:0)}
                </span>
                <span className={(love)? "love":""} onClick={()=>setLove(!love)}>
                    <FaRegHeart />
                    {content.love+((love)?1:0)}
                </span>
                <span>
                    <IoStatsChartSharp />
                    {content.chart}
                </span>
            </article>
            <article className="tweet-mark">
                <FaRegBookmark />
                <LuUpload />
            </article>
        </section>
    )
}
export default Tweet;