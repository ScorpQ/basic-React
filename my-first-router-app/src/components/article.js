import { useParams } from 'react-router-dom';

export default function Articles(){


    let { atest } = useParams();

    return(
        <>
            <h1>{atest}</h1>
        </>
    );
}