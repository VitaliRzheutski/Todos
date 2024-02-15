import { useEffect, useState } from "react";
import ListHeader from "./Components/ListHeader";
import ListItem from "./Components/ListItem"
import Auth from "./Components/Auth";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken

  const [tasks, setTasks] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (authToken) {
      getData()
    }
  }, [])

  //SORT by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && <>
        <ListHeader listName={"Holiday tick list"} getData={getData} />
        <p className="user-email">Welcome back {userEmail}</p>
        {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
      </>}
      <p className="copyright">© Creative </p>

    </div>
  );
}

export default App;
