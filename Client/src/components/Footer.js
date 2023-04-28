import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import useStyles from "./style";
import { Link } from "@mui/material";
import { LinkedIn, YouTube } from "@material-ui/icons";
// import Link from "@material-ui/core/Link";

import {
  EmailOutlined,
  FacebookOutlined,
  Instagram,
  LocationOnOutlined,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container style={{ margin: "20px" }}>
          <Grid item md={4} display="flex">
            <div className={classes.container}>
              <Box
                className={classes.box}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h4" color="black">
                  Health Hive
                </Typography>
                <Box>
              
                <Link
                      href="https://www.facebook.com/profile.php?id=100047229305153" target="_blank"
                    >
                       <FacebookOutlined />
                </Link>

                <Link
                      href="https://www.instagram.com/its_raj_soni_/?r=nametag" target="_blank"
                    >
                        <Instagram />
                </Link>

                <Link
                      href="https://www.linkedin.com/in/raj-kr-soni" target="_blank"
                    >
                       <LinkedIn />
                </Link>

                <Link
                      href="https://www.youtube.com/c/itsrajsoni" target="_blank"
                    >
                       <YouTube />
                </Link>

                </Box>
              </Box>
            </div>
          </Grid>

          <Grid item md={8}>
            <Grid container>
              <Grid item md={4} className={classes.footerSec}>
                <Typography variant="h5" style={{ margin: "20px" }}>
                  Product
                </Typography>

                <Box className={classes.box}>
                  <Typography display="block">Features</Typography>
                  <Typography display="block">Pricing</Typography>
                  <Typography display="block">Reviews</Typography>
                  <Typography display="block">Updates</Typography>
                </Box>
              </Grid>

              <Grid item md={4} className={classes.footerSec}>
                <Typography variant="h5" style={{ margin: "20px" }}>
                  Features
                </Typography>
                <Link sx={{ textDecoration: "none" }} href="/">
                  <Typography className={classes.link}>
                    Personalized Meal
                  </Typography>
                </Link>
                <Link sx={{ textDecoration: "none" }} href="/analysis">
                  <Typography className={classes.link}>
                    Nutritional Analysis
                  </Typography>
                </Link>
                <Link sx={{ textDecoration: "none" }} href="/recipe">
                  <Typography className={classes.link}>
                    Recipe Managment
                  </Typography>
                </Link>
                <Link sx={{ textDecoration: "none" }} href="/contact">
                  <Typography className={classes.link}>Contact Us</Typography>
                </Link>
              </Grid>
              <Grid item md={4} className={classes.footerSec}>
                <Typography variant="h5" style={{ margin: "20px" }}>
                  Contact Us
                </Typography>
                <Box className={classes.box}>
                  <Typography variant="subtitle1" display="block">
                    <EmailOutlined />
                     inforajsoni@gmail.com
                  </Typography>

                  <Typography variant="subtitle1" display="block">
                    <Phone /> +91 7632858301
                  </Typography>

                  <Typography variant="subtitle1" display="block">
                    <LocationOnOutlined /> Chandigarh University, Mohali, Punjab
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <div style={{ textAlign: "center", margin: "5px" }}>
          <Typography>Copyright &copy; HealthHive</Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
