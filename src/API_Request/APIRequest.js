import axios from "axios";

const BaseURL = "https://basic-blog.teamrabbil.com/api";

export const postCategories = async () => {
  let res = await axios.get(BaseURL + "/post-categories");
  if (res.status == 200) {
    return res.data;
  } else {
    return [];
  }
};

export const postLatest = async () => {
  let res = await axios.get(BaseURL + "/post-newest");
  if (res.status == 200) {
    return res.data;
  } else {
    return [];
  }
};

export const postByCategory = async (id) => {
  let res = await axios.get(`${BaseURL}/post-list/${id}`);
  if (res.status == 200) {
    return res.data;
  } else {
    return [];
  }
};

export const postDetails = async (id) => {
  let res = await axios.get(`${BaseURL}/post-details/${id}`);
  if (res.status == 200) {
    return res.data;
  } else {
    return [];
  }
};
