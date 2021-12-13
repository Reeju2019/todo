import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function CardView(props) {
  const { userData, onDelete } = props;

  const editText = (id) => {
    // console.log(userData);
    // console.log(id);
    return null;
  };
  //   console.log(userData);
  return (
    <>
      <Card variant="outlined" style={{ maxWidth: "200px" }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {userData?.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {userData?.text}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "space-between" }}>
          <Button size="small" onClick={editText(userData?.id)}>
            Edit
          </Button>
          <Button size="small" onClick={() => onDelete(userData?.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
