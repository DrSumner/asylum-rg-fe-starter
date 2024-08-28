import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useState } from 'react';

const { primary_accent_color } = colors;

function HeaderContent() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7'}}>
          Graphs
        </Link>
        {!isUserLoggedIn && 
        <Link to="/login" style={{ color: '#E2F0F7', paddingLeft: '75px' }}>
        Login
      </Link>
        }
        {isUserLoggedIn && 
        <Link to="/profile" style={{ color: '#E2F0F7', paddingLeft: '75px' }}>
          My Profile
        </Link>
        }
        {isUserLoggedIn && 
        <Link to="/logout" style={{ color: '#E2F0F7', paddingLeft: '75px' }}>
          Logout
        </Link>
        }
        
      </div>
    </div>
  );
}

export { HeaderContent };
