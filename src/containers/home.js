import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core';
import {Container, AppBar, Toolbar, Button, Typography, IconButton, Avatar} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import Grid from "@material-ui/core/Grid/Grid";
import profilePic from '../images/steve_square.jpg';
import profileBackground from '../images/background.jpg';
import logo from '../images/logo.svg';
import {Tabs, Tab} from '@material-ui/core';
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Hidden from "@material-ui/core/Hidden/Hidden";

const useStyles = makeStyles(theme => ({
    root: {margin:0, padding:0, backgroundColor: '#fafafa'},
    greyBg:{ backgroundColor: '#fafafa'},
    logo:{width:'200px', height:'200px', margin: '10px auto' },
    left:{display:'flex'},
    toolbar:{
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarGap: {
        flex:1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    fullWidth:{
        padding:0
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: '#34495e',//theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        paddingTop:theme.spacing(4),
        paddingBottom:theme.spacing(4),

    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    bigAvatar: {
        margin: 10,
        width: 250,
        height: 250,
        border: `4px solid ${theme.primary}`
    },
    card: {
        display: 'flex',
        border: `0.5px solid rgba(0,0,0,0.1)`,
        boxShadow:"none",
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    footer: {
        bottom:0,
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
        borderTop: `1px solid ${theme.palette.divider}`
    },
}));

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

const TopNav =()=>{
    const classes = useStyles();
    return(
        <Toolbar className={classes.toolbar}>
            <Button size="small">Subscribe</Button>
            <Typography className={classes.toolbarGap} />
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <Button variant='text' size="small"  >
                Login
            </Button>
            <Button variant="outlined" size="small">
                Sign up
            </Button>
        </Toolbar>
    )
};

const FooterNote=()=>(
    <Typography variant="body2" color="textSecondary" align="center">
        The best way to be certain of your future is to create it
    </Typography>
);

//Posts
const Posts=()=>{
    const classes = useStyles();
    return(
    <Grid container spacing={4} className={classes.cardGrid}>
        {featuredPosts.map(post => (
            <Grid item key={post.title} md={12}>
                <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {post.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        ))}
    </Grid>
    )
};

const TabContainer=({ children, dir }) =>{
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
};

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const tabStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fafafa',
        width: '100%',
    },
}));

const FullWidthTabs=()=> {
    const classes = tabStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            {/*<AppBar position="static" color="default">*/}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Projects" />
                    <Tab label="Posts" />
                    <Tab label="About" />
                </Tabs>
            {/*</AppBar>*/}
            {value === 0 && <TabContainer dir={theme.direction}>Item One</TabContainer>}
            {value === 1 && <TabContainer dir={theme.direction}><Posts/></TabContainer>}
            {value === 2 && <TabContainer dir={theme.direction}>Item Three</TabContainer>}
        </div>
    );
};

export default function Home () {
    const classes = useStyles();
        return(
            <Fragment>
                <Container maxWidth={'lg-fluid'} className={classes.fullWidth }>
                    <TopNav/>
                    <main className={classes.greyBg}>
                        {/* Main featured post */}
                        <div className={classes.mainFeaturedPost}>
                            {
                                <img
                                    style={{ display: 'none' }}
                                    src={profileBackground}
                                    alt="background"
                                />
                            }
                            <div className={classes.overlay} />
                            <Grid container>
                                <Grid container justify="center" alignItems="center" md={4}>
                                    <Avatar alt="Stephen Byarugaba" src={profilePic} className={classes.bigAvatar} />
                                </Grid>
                                <Grid item md={6}>
                                    <div className={classes.mainFeaturedPostContent}>
                                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                            Stephen Byarugaba
                                        </Typography>
                                        <Typography variant="h6" color="inherit" paragraph>
                                            Hey !!!
                                        </Typography>
                                        <Typography variant="subtitle1" href="#">
                                            I’m a Software Engineer based in Kampala, Uganda and I'm passionate about creating building software and running start ups.
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <Container style={{margin:'20px auto'}}>
                            <Grid container >
                                <Grid item md={4} className={classes.left}>
                                    <img src={logo} className={classes.logo}/>
                                </Grid>
                                <Grid item md={8}>
                                    <FullWidthTabs/>
                                </Grid>
                            </Grid>
                        </Container>
                    </main>

                </Container>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Container maxWidth="lg">
                        {/*<Typography variant="h6" align="center" gutterBottom>*/}
                            {/*<img src={logo} className={classes.logo}/>*/}
                        {/*</Typography>*/}
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            I code for simplicity, fun and creation
                        </Typography>
                        <FooterNote />
                    </Container>
                </footer>
                {/* End footer */}
            </Fragment>
        )
}

