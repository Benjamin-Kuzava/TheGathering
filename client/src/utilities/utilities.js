// Format date string
export const formatDate = (string) => {
  let options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// const sameCategoryJSX = articles
//   .filter(
//     (a) =>
//       a.categories[0].name === article?.categories[0].name &&
//       a.id !== article?.id
//   )
//   .map((article) => <ArticleCard key={article.id} article={article} />);

/* <Grid
          item
          xs={12}
          container
          direction="column"
          spacing={4}
          alignItems="center"
          component={Paper}
          elevation={3}
          className={classes.recommended}
        >
          <Typography variant="button">
            {article &&
              `More ${capitalize(article?.categories[0].name)} Content`}
          </Typography>
          <Divider className={classes.divider} />
          {sameCategoryJSX}
        </Grid> */
