import React, { useState, useEffect } from 'react';
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
`;

const NavContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px; /* ensures all items are same height */
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: clamp(1rem, 1.8vw + 0.5rem, 1.6rem);
  background: linear-gradient(135deg, rgb(17, 115, 172), #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  align-items: center; /* fix dropdown button vertical alignment */
`;

const NavItem = styled.li``;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#fff' : '#4A628A'};
  font-weight: ${props => props.isActive ? '600' : '500'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none; /* removes underline */
  background: ${props => props.isActive ? 'linear-gradient(135deg, #3A4A6A, #3A4A6A)' : 'transparent'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  height: 100%;

  &:hover {
    background: ${props => props.isActive ? 'linear-gradient(135deg, #3A4A6A, #3A4A6A)' : 'linear-gradient(135deg, #7AB2D3, #B9E5E8)'};
    color: ${props => props.isActive ? 'white' : '#3F65A7'};
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const DropdownButton = styled.button`
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem; /* smaller padding for better vertical alignment */
  border-radius: 8px;
  cursor: pointer;
  height: 38px; /* consistent height with nav links */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  min-width: 150px;
  overflow: hidden;

  a {
    display: block;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: #4A628A;
    &:hover {
      background: #DFF2EB;
    }
  }
`;

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let visibleLinks = navigation;
  let dropdownLinks: typeof navigation = [];

  if (windowWidth <= 1080 && windowWidth >= 768) {
    visibleLinks = navigation.slice(0, 3);
    dropdownLinks = navigation.slice(3);
  } else if (windowWidth < 768) {
    const activeItem = navigation.find(item => item.url === location.pathname);
    visibleLinks = activeItem ? [activeItem] : [];
    dropdownLinks = navigation.filter(item => item.url !== location.pathname);
  }

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">Mukaffi Bin Moin</Logo>
        <NavList>
          {visibleLinks.map(item => (
            <NavItem key={item.url}>
              <NavLink
                to={item.url}
                isActive={location.pathname === item.url}
              >
                {item.title}
              </NavLink>
            </NavItem>
          ))}

          {dropdownLinks.length > 0 && (
            <DropdownWrapper>
              <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                ☰
              </DropdownButton>
              <DropdownMenu isOpen={isDropdownOpen}>
                {dropdownLinks.map(item => (
                  <Link key={item.url} to={item.url} onClick={() => setIsDropdownOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </DropdownMenu>
            </DropdownWrapper>
          )}
        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
