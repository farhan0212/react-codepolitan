import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../context";

const NewArticle = () => {
  return <span>--New</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        date : {props.date}, Tags : {props.tags.join(", ")}{" "}
        {props.isNew && <NewArticle />}
      </small>
      <small>
        Ditulis oleh {user.name} role = {user.role}
      </small>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  isNew: PropTypes.bool,
};

export default Article;
