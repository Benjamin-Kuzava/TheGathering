import {
  Button,
  capitalize,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory, useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "2em",
  },
  buttonTwo: {
    marginBottom: "1em",
  },
  container: {
    marginBottom: "4rem",
  },
  formControl: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ArticleEdit = (props) => {
  const [richText, setRichText] = useState("");
  const [formData, setformData] = useState({
    title: "",
    content: richText,
    img_url: "",
    summary: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  const { handleUpdate, handleDelete, articles, categories } = props;
  const { title, content, img_url, summary } = formData;
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const prefillFormData = () => {
      const article = articles.find((article) => article.id === Number(id));
      setRichText(article.content);
      setformData({
        title: article.title,
        content: article.content,
        img_url: article.img_url,
        summary: article.summary,
      });
    };
    if (articles.length) prefillFormData();
  }, [articles, id]);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleRTChange = (e, editor) => {
    const richText = editor.getData();
    setRichText(richText);
    setformData((prevState) => ({
      ...prevState,
      content: richText,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Grid container spacing={4} justify="center" className={classes.container}>
      <Grid item xs={12}>
        <Banner isDetail />
      </Grid>
      <Grid item xs={11} md={8}>
        <form
          className="create-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, formData);
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            value={title}
            onChange={handleChange}
            color="secondary"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="img_url"
            label="Banner Image URL"
            name="img_url"
            autoComplete="img_url"
            value={img_url}
            onChange={handleChange}
            color="secondary"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="summary"
            label="Short Summary"
            helperText="1-2 sentences max."
            name="summary"
            autoComplete="summary"
            value={summary}
            onChange={handleChange}
            color="secondary"
          />
          <Grid item container direction="column" alignItems="flex-start">
            <FormControl className={classes.formControl}>
              <InputLabel id="select-label">Categories</InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className={classes.select}
              >
                <MenuItem value="default">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem value={category.name} key={category.id}>
                    {capitalize(category.name)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.buttonTwo}
              // onClick={() => handleCategoryAddition()}
            >
              Add Category
            </Button>
          </Grid>
          {content && (
            <CKEditor
              editor={ClassicEditor}
              onChange={handleRTChange}
              data={content}
            />
          )}
          <Grid
            item
            container
            justify={isSmallScreen ? "space-between" : "flex-start"}
            spacing={1}
          >
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Submit Changes
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={() => history.push(`/articles/${id}`)}
              >
                Discard Changes
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={() => handleDelete(id)}
              >
                Delete Article
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ArticleEdit;
