import User from "./User"
const Users=()=>{
    let arr = [ { id: 1, name: "John", email: 'jjj@gamil.com' },
    { id: 2, name: "Marry", email: 'mmm@gamil.com' },
    { id: 3, name: "Anne", email: 'aaa@gamil.com' },
    ]
    return (
        <>
        {/* <User name={users[1].name} email={users[1].email}/> */}
        {arr.map((item,indx)=>{
        return (
            <User name={item.name} email={item.email} key={indx}/>
        )
    })}
    </>
    )
}

export default Users;