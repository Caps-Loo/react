import { useNavigate} from 'react-router-dom'

function First() {
    const navigate = useNavigate();

    return (
        <>
            <h3>Homepage Route</h3>
            <button onClick={() => navigate('/about')}>Next</button>
        </>
    )
}

export default First