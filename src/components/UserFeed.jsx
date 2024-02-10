import { IoSettingsOutline, IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import UserData from "../assets/userdata";
function UserFeed(){
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
                <section>

                </section>
            </article>
        </div>
    )
}
export default UserFeed;