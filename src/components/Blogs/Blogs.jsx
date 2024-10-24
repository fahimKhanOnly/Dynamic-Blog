import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    let [getData, setData] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(api => api.json())
        .then(data => setData(data));
    }, [])
    return (
        <div>
            {
                getData.map(data => <Blog key={data.id} data={data}></Blog>)
            }
        </div>
    );
};

export default Blogs;
