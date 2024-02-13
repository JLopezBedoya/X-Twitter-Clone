import { IoSettingsOutline, IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import UserData, { TweetGenerator, UserGenerator } from "../assets/userdata";
import Tweet from "./tweet";
import useGet from "./useGet";
function UserFeed(){
    const tweets = useGet("https://api.quotable.io/quotes/random?limit=6")
    const random = useGet("https://randomuser.me/api/?results=6")
    var data
    var users
    if(!tweets.load && !random.load){
        data = TweetGenerator(tweets.datos)
        users = UserGenerator(random.datos.results)
    }
    return(
        <div>
            <article className="feed">
                <section className="feed-header">
                    <article>
                        <h1>For You</h1>
                        <h1 className="active">Following</h1>
                    </article>
                    <h1><IoSettingsOutline /></h1>
                </section>
                <div className="feed-move">
                <section className="feed-post">
                    <img src={UserData.pct} alt="User's Photo" />
                    <article className="feed-post-text">
                        <textarea placeholder="What is happening?!"/>
                        <section>
                            <article>
                                <IoImageOutline />
                                <MdOutlineGifBox />
                                <PiSlidersHorizontalDuotone />
                                <HiOutlineFaceSmile />
                                <LuCalendarClock />
                                <IoLocationOutline />
                            </article>
                            <div>
                                <button>Post</button>
                            </div>
                        </section>
                    </article>
                </section>
                {(!tweets.load && !random.load)? data.map((e,i)=>(
                    <Tweet content={e} key={"Tweet#"+i} users={users}/>
                )):<h1>Loading</h1>}
                </div>
                
            </article>
        </div>
    )
}
export default UserFeed;