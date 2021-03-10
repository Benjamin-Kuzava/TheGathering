import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { UserContext } from "../../utilities/UserContext";
import {
  Divider,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";

// Adapted from docs: https://material-ui.com/components/tabs/
const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    backgroundColor: "transparent",
    "& > span": {
      width: "100%",
      backgroundColor: "white",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
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
  divider: {
    color: "black",
    width: "100%",
  },
  extendedIcon: {
    marginRight: theme.spacing(0.5),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function TabBar(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [queriedCategory, setQueriedCategory] = useState("");
  const { currentUser } = useContext(UserContext);
  const { articles } = props;

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setQueriedCategory(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <StyledTabs
          value={value}
          onChange={handleTabChange}
          aria-label="simple tabs example"
        >
          <Tab label="Featured" {...a11yProps(0)} />
          <Tab label="All Articles" {...a11yProps(1)} />
          {currentUser && <Tab label="Your Articles" {...a11yProps(2)} />}
        </StyledTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          <Grid item xs={12} container justify="center">
            <Typography variant="h5">Latest Articles</Typography>
          </Grid>
          <Divider className={classes.divider} />
          {articles.map((article) => (
            <Grid key={article.id} item xs={12} sm={6} md={5} lg={4} xl={3}>
              <ArticleCard key={article.id} article={article} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>
          <Grid item xs={12} container justify="space-between ">
            <FormControl className={classes.formControl}>
              <InputLabel id="select-label">Category</InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                value={queriedCategory}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Divider className={classes.divider} />
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
        <Grid item container justify="flex-end">
          <Fab
            color="secondary"
            variant="extended"
            aria-label="add"
            component={Link}
            to="/articles/new"
          >
            <AddIcon className={classes.extendedIcon} />
            Add Article
          </Fab>
        </Grid>
      </TabPanel>
    </div>
  );
}
