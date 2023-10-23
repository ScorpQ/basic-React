import { Link, useParams } from 'react-router-dom';
 
export default function articles(){
    return(
        <>
            <h1>articles</h1>
            <Link to="TEST">Dinamik Routing Denemeleri</Link>
        </>
    );
}