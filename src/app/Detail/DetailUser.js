import React from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from 'axios';

const DetailUser = () => {
  let [user, setUser] = React.useState('')
  let params = useParams();

  React.useEffect(() => {
    axios.get(`https://reqres.in/api/users/${params.id}`)
      .then(res => {
        setUser(res.data.data);
    }).catch(error => console.log(error));
  })

  return (
    <>
      <div>DetailUser</div>
      <div>
        <p>{user.id}</p>
        <p>{user.first_name + " " + user.last_name}</p>
        <p>{user.email}</p>
        <img src={user.avatar}/>
      </div>
    </>
  )
}

export default DetailUser