import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { TagList } from "../components/tags/TagList"
import { TagCreate } from "../components/tags/TagCreate"
import { PostDetail } from "../components/posts/PostDetail"
import { ManagePostTags } from "../components/posts/ManagePostTags"
import { PostList } from "../components/posts/PostList"
import { PostCreate } from "../components/posts/PostCreate"
import { MyPostList } from "../components/posts/MyPostList"
import { PostEdit } from "../components/posts/PostEdit"
import { CategoryList } from "../components/categories/CategoryList"
import { CategoryEdit } from "../components/categories/CategoryEdit"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route element={<Authorized token={token} />}>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<PostCreate />} />
        <Route path="/tags" element={<TagList />} />
        <Route path="/tags/new" element={<TagCreate />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/posts/:postId/tags" element={<ManagePostTags />} />
        <Route path="/posts/:postId/edit" element={<PostEdit />} />
        <Route path="/myposts" element={<MyPostList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/:categoryId/edit" element={<CategoryEdit />} />
      </Route>
    </Routes>
  </>
}
