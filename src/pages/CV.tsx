import React from 'react';
import styled from 'styled-components';
import { Download, Mail, Linkedin, FileText, ExternalLink } from 'lucide-react';

const CVContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const DownloadSection = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(122, 178, 211, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const DownloadText = styled.p`
  color:rgb(0, 49, 133);
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color:rgb(0, 114, 180);
  text-decoration: none;
  font-weight: 600;
  padding: 12px 20px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(122, 178, 211, 0.3);
    border-color: #4A628A;
    color: #4A628A;
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;
  margin-bottom: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(122, 178, 211, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(122, 178, 211, 0.25);
  }
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EmailSection = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '📧';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const SocialSection = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '🔗';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const SectionTitle = styled.h2`
  color: #4A628A;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const EmailItem = styled.p`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SocialText = styled.p`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #7AB2D3;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 16px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(122, 178, 211, 0.3);
    border-color: #4A628A;
    color: #4A628A;
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const CV: React.FC = () => {
  return (
    <CVContainer>
      <DownloadSection>
        <DownloadText>
          You can download a PDF copy of my CV here. The document contains my complete professional background, including education, work experience, and technical skills.
        </DownloadText>
        <DownloadLink href="/files/CV/CV_of_Mukaffi_Bin_Moin.pdf" target="_blank" rel="noopener noreferrer">
          <Download size={18} />
          Download CV
        </DownloadLink>
      </DownloadSection>

      
        <object
        data="https://drive.google.com/file/d/1pmQD5RJDLDDr9ldif7ksK_sYS61ELpPI/preview"
        type="application/pdf"
        width="100%"
        height="800px"
        style={{ border: 'none', borderRadius: '16px', boxShadow: '0 10px 30px rgba(122, 178, 211, 0.15)' , margin: '0 0 3rem 0' }}
      >
    
      </object>
      

      <ContactSection>
        <EmailSection>
          <SectionTitle>
            <Mail size={24} />
            Contact Information
          </SectionTitle>
          <EmailItem>
            <Mail size={16} />
            mukaffimoin28@gmail.com
          </EmailItem>
          <EmailItem>
            <Mail size={16} />
            mukaffi28@gmail.com
          </EmailItem>
        </EmailSection>

        <SocialSection>
          <SectionTitle>
            <Linkedin size={24} />
            Social Media
          </SectionTitle>
          <SocialText>
            Connect with me on professional networks to stay updated with my latest work and research.
          </SocialText>
          <SocialLink href="https://www.linkedin.com/in/mukaffi-bin-moin/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
            LinkedIn Profile
          </SocialLink>
        </SocialSection>
      </ContactSection>
    </CVContainer>
  );
};

export default CV; 