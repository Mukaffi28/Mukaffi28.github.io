import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 400px;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border-right: 1px solid #B9E5E8;
  position: fixed;
  top: 70px;
  left: 0;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #eaecef;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg,rgb(0, 0, 0), #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
`;

const Title = styled.p`
  font-size: 1.1rem;
  color: #4A628A;
  margin: 0 0 2rem 0;
  text-align: center;
  font-weight: 500;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #4A628A;
  
  span {
    margin-left: 0.5rem;
  }
`;

const AcademicLinks = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const LinkItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  color: #4A628A;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid #B9E5E8;
  
  &:hover {
    color: #7AB2D3;
    background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
    border-radius: 8px;
    margin: 0.25rem 0;
    padding: 0.75rem 1rem;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const LinkIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const SidebarContent = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;



const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <ProfileSection>
          <ProfilePicture>
            <img src="/images/profile.jpg" alt="Mukaffi Bin Moin" />
          </ProfilePicture>
          <Name>Mukaffi Bin Moin</Name>
          <Title>Researcher || LLMs & Multimodal</Title>
        </ProfileSection>
        
        <ContactInfo>
          <ContactItem>
            📍 <span>Dhaka, Bangladesh</span>
          </ContactItem>
          <ContactItem>
            ✉️ <span>Email</span>
          </ContactItem>
        </ContactInfo>
        
        <AcademicLinks>
          <LinkItem href="https://scholar.google.com/citations?user=tU258wwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <LinkIcon>🎓</LinkIcon>
            Google Scholar
          </LinkItem>
          <LinkItem href="https://www.researchgate.net/profile/Mukaffi-Moin" target="_blank" rel="noopener noreferrer">
            <LinkIcon>🔬</LinkIcon>
            ResearchGate
          </LinkItem>
          <LinkItem href="https://www.semanticscholar.org/author/Mukaffi-Bin-Moin" target="_blank" rel="noopener noreferrer">
            <LinkIcon>📚</LinkIcon>
            Semantic Scholar
          </LinkItem>
          <LinkItem href="https://www.scopus.com/authid/detail.uri?authorId=57212345678" target="_blank" rel="noopener noreferrer">
            <LinkIcon>📖</LinkIcon>
            Scopus
          </LinkItem>
          <LinkItem href="https://orcid.org/0009-0001-9634-5809" target="_blank" rel="noopener noreferrer">
            <LinkIcon>🆔</LinkIcon>
            ORCID
          </LinkItem>
          <LinkItem href="https://linkedin.com/in/mukaffi-bin-moin" target="_blank" rel="noopener noreferrer">
            <LinkIcon>💼</LinkIcon>
            LinkedIn
          </LinkItem>
          <LinkItem href="https://github.com/Mukaffi28" target="_blank" rel="noopener noreferrer">
            <LinkIcon>🐙</LinkIcon>
            GitHub
          </LinkItem>
        </AcademicLinks>
        
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="https://clustrmaps.com/site/1c38a" title="ClustrMaps" target="_blank" rel="noopener noreferrer">
            <img src="https://www.clustrmaps.com/map_v2.png?d=hmIfEwbtPyT4fAgf0EIp_Xo1LUscuzQCoj1FtxsKDcI&cl=ffffff" width="200px" height="100px" alt="Visitor Map" />
          </a>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar; 