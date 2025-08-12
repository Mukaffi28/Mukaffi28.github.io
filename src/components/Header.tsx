import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border-bottom: 1px solid #B9E5E8;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(122, 178, 211, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 131, 207, 0.15);
  }
`;

const NavContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin-left: 100px; /* Align with sidebar */
  
  @media (max-width: 920px) {
    margin-left: 0;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg,rgb(17, 115, 172), #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 2rem;
  gap: 0.5rem;
  
  @media (max-width: 1080px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    backdrop-filter: blur(10px);
    flex-direction: column;
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 30px rgba(122, 178, 211, 0.15);
    margin-left: 10rem;
    gap: 0;
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    margin: 0;
    border-bottom: 1px solid #e2e8f0;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#7AB2D3' : '#4A628A'};
  text-decoration: none;
  font-weight: ${props => props.isActive ? '600' : '500'};
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: ${props => props.isActive ? 'linear-gradient(135deg, #3A4A6A, #3A4A6A)' : 'transparent'};
  color: ${props => props.isActive ? 'white' : '#4A628A'};
  
  &:hover {
    background: ${props => props.isActive ? 'linear-gradient(135deg, #3A4A6A, #3A4A6A)' : 'linear-gradient(135deg, #7AB2D3, #B9E5E8)'};
    color: ${props => props.isActive ? 'white' : 'rgb(63, 101, 167)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(122, 178, 211, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 0.1;
  }
  
  @media (max-width: 768px) {
    display: block;
    padding: 1rem 2rem;
    border-radius: 0;
    margin: 0.25rem 1rem;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(122, 178, 211, 0.3);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { title: 'Home', url: '/' },
    { title: 'News', url: '/news' },
    { title: 'Research', url: '/research' },
    { title: 'Publications', url: '/publications' },
    { title: 'Work Experience', url: '/work' },
    { title: 'Datasets', url: '/datasets' },
    { title: 'Education', url: '/education' },
    { title: 'CV', url: '/cv' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">Mukaffi Bin Moin</Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavMenu isOpen={isMenuOpen}>
          {navigation.map((item) => (
            <NavItem key={item.url}>
              <NavLink 
                to={item.url} 
                isActive={location.pathname === item.url}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 