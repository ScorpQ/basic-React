export default function Login(props) {
    return (
        <div className = "contact-login">
            <input type='text' onChange={(e)=>props.setIt(e.target.value)}/>
            <input type='submit' onClick={props.onClick} />
        </div>
    );
}