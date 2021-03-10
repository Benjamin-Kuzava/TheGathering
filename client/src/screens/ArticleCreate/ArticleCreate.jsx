import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ArticleCreate = (props) => {
  const [richText, setRichText] = useState("asdfasd");
  const [formData, setformData] = useState({
    title: "",
    content: richText,
    img_url: "",
    summary: "",
  });

  const { title, img_url, summary, handleCreate } = formData;

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

  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={12}>
        <Banner isDetail />
      </Grid>
      <Grid item xs={11} md={8}>
        <form
          className="create-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData);
          }}
        >
          <TextField
            variant="standard"
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
            variant="standard"
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
            variant="standard"
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
          <CKEditor editor={ClassicEditor} onChange={handleRTChange} />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default ArticleCreate;
