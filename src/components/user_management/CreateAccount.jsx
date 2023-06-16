


// eslint-disable-next-line react/prop-types
export default function CreateAccount({ handleCreateAccountForm, loading }) {



    return (
        <div>
            <h4>Create account:</h4>
            <form className='userAuthenticationForm' onSubmit={(event) => {handleCreateAccountForm(event)}}>
                <label htmlFor='email'>Email:</label>
                <input required type='text' id='email' name='email' />
                <label htmlFor='confirmEmail'>Confirm Email:</label>
                <input required type='text' id='confirmEmail' name='confirmEmail' />
                <label htmlFor='password'>Password:</label>
                <input required type='text' id='password' name='password' />
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input required type='text' id='confirmPassword' name='confirmPassword' />
                <p>Papel da conta:</p>
                <label htmlFor='admin'>Administrador:</label>
                <input type='radio' name='role' id='admin' value='admin'/>
                <label htmlFor='manager'>Gerente de compras:</label>
                <input type='radio' name='role' id='manager' value='manager'/>
                <button disabled={loading} type='submit'>Confirmar criação de conta</button>
            </form>
        </div>
    )
}
