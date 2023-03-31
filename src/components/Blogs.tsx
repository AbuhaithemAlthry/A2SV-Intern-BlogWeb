import { Row } from "react-bootstrap";
import { OnDeleteType } from "../layouts/BlogContainer";
export type Blog = {
  title: String;
  img: string;
  author: string;
  description: string;
};
interface BlogsProps {
  blogs: Blog[];
  onDelete: OnDeleteType;
}
const Blogs = ({ blogs, onDelete }: BlogsProps) => {
  return <h1>Blog item goes here</h1>;
};

export default Blogs;
