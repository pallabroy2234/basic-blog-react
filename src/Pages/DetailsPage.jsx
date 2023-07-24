import {useEffect, useState} from "react";
import Layout from "../Layout/Layout";
import {postDetails} from "../API_Request/APIRequest";
import BlogDetails from "../Components/BlogDetails";
import Loader from "../Components/Loader";
import {useParams} from "react-router-dom";

const DetailsPage = () => {
  const [list, setList] = useState(null);
  const {postID} = useParams();
  console.log(postID);
  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      setList(res);
    })();
  }, [postID]);

  return <Layout>{list === null ? <Loader /> : <BlogDetails list={list} />}</Layout>;
};

export default DetailsPage;
