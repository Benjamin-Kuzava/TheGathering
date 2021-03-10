import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { UserContext } from "../../utilities/UserContext";
import { Grid } from "@material-ui/core";
import ArticleCard from "../ArticleCard/ArticleCard";

// Adapted from docs: https://material-ui.com/components/tabs/
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { currentUser } = useContext(UserContext);
  const { articles } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Featured" {...a11yProps(0)} />
          <Tab label="All Articles" {...a11yProps(1)} />
          {currentUser && <Tab label="Your Articles" {...a11yProps(2)} />}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid key={article.id} item xs={12} sm={6} md={5} lg={4} xl={3}>
              <ArticleCard key={article.id} article={article} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid key={article.id} item xs={12} sm={6} md={5} lg={4} xl={3}>
              <ArticleCard key={article.id} article={article} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={4}>
          {articles
            .filter((article) => article.user_id === currentUser?.id)
            .map((article) => (
              <Grid key={article.id} item xs={12} sm={6} md={5} lg={4} xl={3}>
                <ArticleCard key={article.id} article={article} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
    </div>
  );
}
