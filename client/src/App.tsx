import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const title = 'Welcome to Reactivities'

  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  return (

    <>
      <Typography variant="h3" className="app" style={{ color: 'red' }}>{title}</Typography>
      <List>
        {activities.map((activitiy) => (
          <ListItem key={activitiy.id}>
            <ListItemText>{activitiy.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>


  )
}

export default App
