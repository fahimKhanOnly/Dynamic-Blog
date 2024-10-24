import PropTypes from 'prop-types';

const Blog = ({data}) => {
    return (
        <div>
            <h2>Title: {data.title}</h2>
        </div>
    );

};

Blog.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Blog;
