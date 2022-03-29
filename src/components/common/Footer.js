import React from "react";
import { useStyles } from "./style";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { IconButton } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footer}>
        <div style={{ marginLeft: "650px" }}>
          <IconButton>
            <FacebookIcon />
          </IconButton>

          <IconButton>
            <InstagramIcon />
          </IconButton>

          <IconButton>
            <WhatsAppIcon />
          </IconButton>

          <IconButton>
            <TwitterIcon />
          </IconButton>

          <IconButton>
            <YouTubeIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}
