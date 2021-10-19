import { useEffect, useState } from "react";

// Creating useServices function for using in different places
const useServices = () => {
    //Calling State for fetching services data
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // Return Services for destructuring to other components
    return { services, setServices };
}

export default useServices;