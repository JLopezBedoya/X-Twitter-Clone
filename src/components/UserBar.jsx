import pct from "../assets/profile.jpg";
import { FaSistrix, FaRegEnvelope, FaXTwitter, FaRegUser, FaEllipsis} from 'react-icons/fa6';
import { GrHomeRounded } from "react-icons/gr";
import { PiBellBold } from "react-icons/pi";
import { RiFileList2Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
function UserBar(){
    return(
        <div className="bar">
            <h1><FaXTwitter /></h1>
            <div>
                <h2><GrHomeRounded /> Home</h2>
                <h2><FaSistrix /> Explore</h2>
                <h2><PiBellBold /> Notifications</h2>
                <h2><FaRegEnvelope /> Messages</h2>
                <h2><RiFileList2Line /> Lists</h2>
                <h2><BsPeople /> Communities</h2>
                <h2><FaXTwitter /> Premium</h2>
                <h2><FaRegUser /> Profile</h2>
                <h2 className='ellipsis'><FaEllipsis /> More</h2>
            </div>
            <button>POST</button>
            <article className='bar-user'>
                <section className='bar-user-photo'>
                    <img src={pct} alt="User Photo" />
                </section>
                <section className="bar-user-name">
                    <span>username</span>
                    <br />
                    @username2004
                </section>
                <section>
                    <FaEllipsis/>
                </section>
            </article>
        </div>
    )
}
export default UserBar;