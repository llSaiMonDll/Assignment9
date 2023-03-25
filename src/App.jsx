import List from "./components/List"
import TypeMe from "./components/TypeMe"
import MyForm from "./components/myForm"
function App() {
    const users = [
      {
        name: "John Doe",
        job: "Engineer",
        hobby: "Listening to music"
      },
      {
        name: "John Son",
        job: "Freelance",
        hobby: "Listening to wife"
      },
      {
        name: "John Yaw",
        job: "Free",
        hobby: "Listening to girlfriend"
      }];
  return (
    <div>
    <List users={users}/>
    <TypeMe/>
    <MyForm/>
    </div>
  )
}

export default App