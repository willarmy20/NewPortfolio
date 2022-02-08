import React from 'react';
import { FacebookIcon, GitHubIcon, Icons, InstagramIcon, Line } from '../styledComponets/SocialIconsStyle';

const SocialIcons = () => {
  return (
        <>
            <Icons>
                <div>
                <GitHubIcon />
                </div>
                <div>
                <FacebookIcon />
                </div>
                <div>
                <InstagramIcon />
                </div>
                <Line />
            </Icons>
        </>
      )
};

export default SocialIcons;
