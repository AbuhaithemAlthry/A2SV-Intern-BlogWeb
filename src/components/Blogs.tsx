import { Row} from 'react-bootstrap';
import { OnDeleteType } from '../layouts/BlogContainer';
import BlogItem from './Blog'
export type Blog = {
    title: String,
    img: string,
    author: string,
    description: string
};
interface BlogsProps {
    blogs: Blog[],
    onDelete: OnDeleteType
}
const Blogs = ({ blogs, onDelete }: BlogsProps) => {
    return (
        <Row>
            {blogs.map((blog: Blog, index: number) => {
                return <BlogItem blog={blog} index={index} onDelete={onDelete} />
            })}
        </Row>
    );
}

export default Blogs;