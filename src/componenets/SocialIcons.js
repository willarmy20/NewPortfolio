import React from 'react';
import { Icons, FacebookIcon, GitHubIcon, InstagramIcon, Line } from '../styledComponets/SocialIconsStyle';
import {themes} from '../componenets/Themes'

const SocialIcons = (props) => {
  return (
        <Icons>
            <div>
              <GitHubIcon fill={props.them === 'dark' ? themes.DarkTheme.text : themes.DarkTheme.body }/>
            </div>
            <div>
              <FacebookIcon fill={props.them === 'dark' ? themes.DarkTheme.text : themes.DarkTheme.body }/>
            </div>
            <div>
              <InstagramIcon fill={props.them === 'dark' ? themes.DarkTheme.text : themes.DarkTheme.body }/>
            </div>
              <Line color={props.themes} />
        </Icons>
  )
};

export default SocialIcons;
