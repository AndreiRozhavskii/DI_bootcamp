import { user_style,username } from "./style";

const User = (props) =>{
    console.log(props);
    const style=
        {dispaly:'inline-block', border:"1px solid black",
        margin: "20px",
        padding: "20px",
        textAlign:"center",
        backgroundColor: "lightgreen"}
        
    return(
        <div style={user_style}>
            <h2 style={username}></h2>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default User