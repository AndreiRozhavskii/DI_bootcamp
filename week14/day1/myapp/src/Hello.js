const Hello =()=>{
    let title = 'My title';
    let arr = [{name: 'John'},{name: 'Ann'},{name:'Dan'}]
    return(
        <>
        <h1>{title}</h1>
        {arr.map(item=>{
            return(<div>
                {item.name}
            </div>)
        })}
        </>   

    );
};

export default Hello;