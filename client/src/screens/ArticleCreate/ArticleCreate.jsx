import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
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
import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import "./ArticleCreate.css";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "2em",
  },
  buttonSmall: {
    marginTop: "2em",
    width: "100%",
  },
  formControl: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    marginBottom: "4rem",
  },
}));

const ArticleCreate = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [richText, setRichText] = useState("");
  const [formData, setformData] = useState({
    title: "",
    content: richText,
    img_url: "",
    summary: "",
  });

  const { title, img_url, summary } = formData;
  const { categories } = props;
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleRichTextChange = (e, editor) => {
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
            props.handleCreate(formData);
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
            autoFocus
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
          <FormControl className={classes.formControl}>
            <InputLabel id="select-label">Filter Categories</InputLabel>
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
          <CKEditor editor={ClassicEditor} onChange={handleRichTextChange} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={isSmallScreen ? classes.buttonSmall : classes.button}
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default ArticleCreate;
