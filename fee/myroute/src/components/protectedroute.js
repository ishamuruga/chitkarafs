import {Navigate} from 'react-router-dom';

const ProtectedRoute = (props) => {
    const flag = sessionStorage.getItem("auth");

    if (flag==="true"){
        return props.children;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default ProtectedRoute;