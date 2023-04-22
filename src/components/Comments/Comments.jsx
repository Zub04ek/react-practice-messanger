import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";

export const Comments = () => {
  const filter = useSelector(selectFilter);
  const normalizedFilter = filter.toLowerCase();

  const filteredComments = () => {
    return comments.filter((comment) => {
      return comment.content.toLowerCase().includes(normalizedFilter);
    });
  };
  return (
    <Grid>
      {comments &&
        filteredComments().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
