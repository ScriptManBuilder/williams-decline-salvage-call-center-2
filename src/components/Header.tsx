import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CTAButtons,
  Button
} from '../styles/Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // if (location.pathname === '/support') {
    //   return;
    // }
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCustomerCareClick = () => {
    navigate('/support');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
            <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
          </svg>
          {process.env.REACT_APP_BRAND_NAME || 'Keltrova'}
        </Logo>
        <NavLinks>
          <NavLink href="#features" onClick={(e) => handleNavClick(e, '#features')}>What We Do</NavLink>
          <NavLink href="#stats" onClick={(e) => handleNavClick(e, '#stats')}>How It Works</NavLink>
          <NavLink href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>Results</NavLink>
          <NavLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>Who We Serve</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Sales</NavLink>
        </NavLinks>
        <CTAButtons>
          <Button onClick={handleCustomerCareClick}>Custom Care</Button>
          <Button $primary onClick={handleButtonClick}>Get Started</Button>
        </CTAButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
