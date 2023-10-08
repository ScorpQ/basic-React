export default function Login(props) {
    return (
        <form className = "contact-login" onClick={props.onClick}>
            <input type='text' onChange={(e)=>props.setIt(e.target.value)}/>
            <input type='submit' />
        </form>
    );
}