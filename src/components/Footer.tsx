import React from 'react';
import styled from 'styled-components';

interface FooterProps {
  variant?: 'sidebar' | 'main';
}

const FooterContainer = styled.footer<FooterProps>`
  background-color: ${props => props.variant === 'sidebar' ? 'transparent' : '#f8f9fa'};
  border-top: ${props => props.variant === 'sidebar' ? 'none' : '1px solid #eaecef'};
  padding: ${props => props.variant === 'sidebar' ? '0' : '2rem 0'};
  margin-top: ${props => props.variant === 'sidebar' ? '0' : 'auto'};
`;

const FooterContent = styled.div<FooterProps>`
  max-width: ${props => props.variant === 'sidebar' ? '100%' : '1200px'};
  margin: 0 auto;
  padding: ${props => props.variant === 'sidebar' ? '0' : '0 2rem'};
  text-align: ${props => props.variant === 'sidebar' ? 'left' : 'center'};
`;

const Copyright = styled.p<FooterProps>`
  color: #666;
  font-size: ${props => props.variant === 'sidebar' ? '0.8rem' : '0.9rem'};
  text-align: ${props => props.variant === 'sidebar' ? 'left' : 'right'};
  margin: 0;
`;

const Footer: React.FC<FooterProps> = ({ variant = 'main' }) => {
  return (
    <FooterContainer variant={variant}>
      <FooterContent variant={variant}>
        <Copyright variant={variant}>
          © {new Date().getFullYear()} Mukaffi Bin Moin. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 