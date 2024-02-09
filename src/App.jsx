import UserBar from "./components/UserBar"
import UserFeed from "./components/UserFeed"
import UserSearch from "./components/UserSearch"

function App(){
  return(
    <div className="container">
      <UserBar />
      <UserFeed />
      <UserSearch />
    </div>
  )
}
export default App