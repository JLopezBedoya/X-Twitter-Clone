import { FaSistrix } from "react-icons/fa6";
import UserData from "../assets/userdata";

function UserSearch(){
    return(
        <div className="news">
                <section className="news-search">
                    <article className="news-search-input">
                        <label htmlFor="searcher"><FaSistrix /></label>
                        <input id="searcher" type="text" placeholder="Search" />
                    </article>
                </section>
                <section className="news-trend">
                    <h1>what's happening</h1>
                    <ul>
                        {[0,1,2,3,4, 5].map(e=>(
                            <li key={"trend"+e}> 
                                <span>trending</span><br />
                                <span className="trend">Keanu Revees</span><br />
                                <span>12,4k Posts</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="news-trend">
                    <h2>Who to follow</h2>
                    <ul>
                    {[0,1,2].map(e=>(
                            <li key={"follow"+e}>
                                <article className='bar-user'>
                                    <section className='bar-user-photo'>
                                        <img src={UserData.pct} alt="User's Photo" />
                                    </section>
                                    <section className="bar-user-name">
                                        <span>{UserData.name}</span>
                                        <br />
                                        {UserData.at}
                                    </section>
                                    <section className="bar-user-follow">
                                        Follow
                                    </section>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="news-terms">
                    <span>terms and services</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                    <span>Accessibilly</span>
                    <span>Ads Info</span>
                    <span>More</span>
                    <span>2024 JLopezBedoya</span>
                </section>
        </div>
    )
}
export default UserSearch;