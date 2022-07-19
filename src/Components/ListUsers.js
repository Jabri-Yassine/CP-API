import axios from "axios"
import { ListGroup,Spinner } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"

const ListUsers=()=>{
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=>setLoading(false))
        .catch((error)=>console.log(error))
    },[])

 return(
    <div>
      {
        loading ? 
        <Spinner animation="border" variant="warning" />
        :
        <ListGroup>
            {
             users.map(user => <ListGroup.Item key={user.id} as={Link} to={`/Users/${user.id}`}>{user.name}</ListGroup.Item>)
            }
        </ListGroup>       
      }
    </div>
 )
}
export default ListUsers