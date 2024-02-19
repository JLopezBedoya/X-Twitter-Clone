import { FaSistrix } from "react-icons/fa6";
import UserData, { UserGenerator, newsData } from "../assets/userdata";
import useGet from "./useGet";

function UserSearch(){
    const {load, datos} = useGet("https://randomuser.me/api/?results=3")
    var tofollow
    if(!load){
        tofollow = UserGenerator(datos.results)
    }
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
                        {newsData.map((e,i)=>(
                            <li key={"trend"+i}> 
                                <span> {e.topic} &#183; trending </span><br />
                                <span className="trend"> {e.title} </span><br />
                                <span> {e.posts} </span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="news-trend">
                    <h2>Who to follow</h2>
                    <ul>
                    {(load)?<h2>Loading</h2>:tofollow.map((e,i)=>(
                            <li key={"follow"+i}>
                                <article className='bar-user'>
                                    <section className='bar-user-photo'>
                                        <img src={e.pct} alt="User's Photo" />
                                    </section>
                                    <section className="bar-user-name">
                                        <span>{e.name}</span>
                                        <br />
                                        {e.at}
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