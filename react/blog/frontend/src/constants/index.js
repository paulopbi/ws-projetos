import Thumbnail1 from "/images/blog1.jpg";
import Thumbnail2 from "/images/blog2.jpg";
import Thumbnail3 from "/images/blog3.jpg";
import Thumbnail4 from "/images/blog4.jpg";
import Thumbnail5 from "/images/blog5.jpg";

import Avatar1 from "/images/avatar1.jpg";
import Avatar2 from "/images/avatar2.jpg";
import Avatar3 from "/images/avatar3.jpg";
import Avatar4 from "/images/avatar4.jpg";
import Avatar5 from "/images/avatar5.jpg";

export const postsDummy = [
  {
    id: 1,
    authorID: 432,
    thumbnail: Thumbnail1,
    title: "Post 1: Dummy Title",
    description:
      "This is the content for post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Author 1",
    date: "2025-02-14",
    category: "Food",
  },
  {
    id: 2,
    authorID: 123,
    thumbnail: Thumbnail2,
    title: "Post 2: Another Dummy Title",
    description:
      "Here is some content for post 2. Vivamus lacinia odio vitae vestibulum vestibulum.",
    author: "Author 2",
    date: "2025-02-13",
    category: "Education",
  },
  {
    id: 3,
    authorID: 53412,
    thumbnail: Thumbnail3,
    title: "Post 3: Yet Another Title",
    description:
      "Content for post 3 goes here. Cras ultricies ligula sed magna dictum porta.",
    author: "Author 3",
    date: "2025-02-12",
    category: "Education",
  },
  {
    id: 4,
    authorID: 1534,
    thumbnail: Thumbnail4,
    title: "Post 4: Placeholder Title Wellcome to Brazil partner!",
    description:
      "The content for post 4. Nulla quis lorem ut libero malesuada feugiat.",
    author: "Author 4",
    date: "2025-02-11",
    category: "Food",
  },
  {
    id: 5,
    authorID: 654,
    thumbnail: Thumbnail5,
    title: "Post 5: Sample Post Title",
    description:
      "This is the content for post 5. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, ut lacinia in, elementum id enim. ut lacinia in, elementum id enim. acinia in, elementum id enim. Quisque velit nisi!",
    author: "Author 5",
    date: "2025-02-10",
    category: "Tech",
  },
];

export const authorsData = [
  { id: 1, avatar: Avatar1, name: "John Doe", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Robert Downey", posts: 2 },
  { id: 3, avatar: Avatar3, name: "Alexia Cooper", posts: 1 },
  { id: 4, avatar: Avatar4, name: "Lucky Ned", posts: 5 },
  { id: 5, avatar: Avatar5, name: "Trevor Phillips", posts: 4 },
];

export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export const posts_categories = [
  "Agriculture",
  "Business",
  "Education",
  "Entertainment",
  "Art",
  "Investment",
  "Uncategorized",
  "Weather",
];

export const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
