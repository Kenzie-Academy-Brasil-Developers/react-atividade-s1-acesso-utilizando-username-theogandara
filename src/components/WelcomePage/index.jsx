const GetUserComponent = ({user,setIsLoggedIn}) =>{

    const HandleLogout = () =>{
        setIsLoggedIn(false)
    }

    console.log(user)
    return (
        <>
        <h1>Seja bem vindo {user} !</h1>
        <button onClick = {HandleLogout}>Logout</button>
        </>
    )
}

export default GetUserComponent;