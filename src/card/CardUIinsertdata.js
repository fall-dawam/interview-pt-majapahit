import {Component} from 'react';
import Users from "../user-data/Data";
import  './CardStyle.css';

class CardUIinsertdata extends Component{
    render(){
        return(
            <div className='blankCard'>
                {Users.map((user, index) =>{
                    return(
                        <div key={index}>
                            <div className="card border-danger">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">user Id: {user.userId}</li>
                                        <li className="list-group-item">Id: {user.id}</li>
                                        <li className="list-group-item">Title: {user.title}</li>
                                        <li className="list-group-item">{user.body}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
                    
            </div>
        )
    }
}

export default CardUIinsertdata;