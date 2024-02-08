import { useEffect, useState } from "react";
import ListHeader from "./Components/ListHeader";
import ListItem from "./Components/ListItem"

const App = () => {
  const userEmail = "vitalrzheutsky@gmail.com"
  const [tasks, setTasks] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  //SORT by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} getData={getData} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
    </div>
  );
}

export default App;
