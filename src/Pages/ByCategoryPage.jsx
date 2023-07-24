import {useParams} from "react-router-dom";
import Layout from "../Layout/Layout";
import {useEffect, useState} from "react";
import {postByCategory} from "../API_Request/APIRequest";
import Loader from "../Components/Loader";
import BlogList from "../Components/BlogList";

const ByCategoryPage = () => {
  const [list, setList] = useState(null);
  let {categoryID} = useParams();

  useEffect(() => {
    (async () => {
      let res = await postByCategory(categoryID);
      setList(res);
    })();
  }, [categoryID]);

  return <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>;
};

export default ByCategoryPage;
