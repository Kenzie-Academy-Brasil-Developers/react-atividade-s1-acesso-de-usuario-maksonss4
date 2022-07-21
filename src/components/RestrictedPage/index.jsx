import "./style.css"

const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {
    return (
        <div>
            {
                isLoggedIn ?
                <>
                <h3>Bem-vindo {user}!</h3>
                <button onClick={Logout}>Logout</button>
                </>
                :
                <>
                <h3>Você não pode acessar essa página</h3>
                <button onClick={Login}>Login</button>
                </>
            }
        </div>
    )
}

export default RestrictedPage