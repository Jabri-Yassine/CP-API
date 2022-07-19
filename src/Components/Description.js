import {Card,Spinner} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from 'axios';

const Description =()=>{

    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res)=> setUser(res.data))
      .then(()=> setLoading(false))
      .catch((error)=> console.log(error))
    },[])

    return(
        <div>
           {
             loading ?   
              <Spinner animation="border" variant="warning" />
              :
              <Card style={{ width: '18rem' }}>
               <Card.Body>
                 <Card.Title>{user.name}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                 <Card.Text>{user.username}</Card.Text>
                 <Card.Text>{user.email}</Card.Text>           
                </Card.Body>
              </Card>
            }
        </div>
    )
}
export default Description