export default function Login(props) {
    return (
        <div className = "contact-login">
            <input type='text' />
            <input type='submit' onClick={props.onClick} />
        </div>
    );
}