import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory, useParams } from "react-router";

const ArticleEdit = (props) => {
  const [richText, setRichText] = useState("");
  const [formData, setformData] = useState({
    title: "",
    content: richText,
    img_url: "",
    summary: "",
  });

  const { handleUpdate, articles } = props;
  const { title, content, img_url, summary } = formData;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const article = articles.find((article) => article.id === Number(id));
      setformData({
        title: article.title,
        content: article.content,
        img_url: article.img_url,
        summary: article.summary,
      });
    };
    if (articles.length) prefillFormData();
  }, [articles, id]);

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
      <Grid item xs={8}>
        <form
          className="create-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, formData);
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
          <CKEditor
            editor={ClassicEditor}
            onChange={handleRTChange}
            data={content}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Changes
          </Button>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={() => history.push(`/articles/${id}`)}
          >
            Discard Changes
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default ArticleEdit;
