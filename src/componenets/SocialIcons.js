import React from 'react';
import { Icons, FacebookIcon, GitHubIcon, InstagramIcon, Line } from '../styledComponets/SocialIconsStyle';
import {DarkTheme} from '../componenets/Themes'

const SocialIcons = (props) => {
  return (
        <Icons>
            <div>
              <GitHubIcon fill={props.them === 'dark' ? DarkTheme.text : DarkTheme.body }/>
            </div>
            <div>
              <FacebookIcon fill={props.them === 'dark' ? DarkTheme.text : DarkTheme.body }/>
            </div>
            <div>
              <InstagramIcon fill={props.them === 'dark' ? DarkTheme.text : DarkTheme.body }/>
            </div>
              <Line color={props.theme} />
        </Icons>
  )
};

export default SocialIcons;
