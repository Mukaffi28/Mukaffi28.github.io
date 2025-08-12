import React from 'react';
import styled from 'styled-components';
import { Briefcase, ExternalLink, Calendar, Users, Code, Brain, Eye, Shield, Bot } from 'lucide-react';

const WorkContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`;

const Section = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const JobItem = styled.div`
  margin-bottom: 2.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
`;

const JobTitle = styled.h3`
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CompanyName = styled.div`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #475569;
  font-weight: 600;
`;

const CompanyLink = styled.a`
  color:rgb(0, 63, 100);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
    transform: translateY(-1px);
  }
`;

const JobPeriod = styled.div`
  color:rgb(0, 67, 105);
  font-style: italic;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  padding: 8px 16px;
  border-radius: 12px;
  display: inline-flex;
`;

const JobDescription = styled.ul`
  font-family: 'Inter', sans-serif;
  color: #475569;
  line-height: 1.8;
  list-style: none;
  padding: 0;
`;

const JobDescriptionItem = styled.li`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(122, 178, 211, 0.15);
    border-color: #7AB2D3;
  }
  
  &::before {
    content: '▸';
    position: absolute;
    left: -8px;
    top: 1.5rem;
    background: #7AB2D3;
    color: white;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const ContentCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #7AB2D3;
    box-shadow: 0 4px 15px rgba(122, 178, 211, 0.1);
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`;

const TechnologyCard = styled.div`
  background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 100%);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &::before {
    content: '⚙️';
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    font-size: 1.2rem;
    opacity: 0.7;
  }
  
  &:hover {
    border-color: #4A628A;
    box-shadow: 0 4px 15px rgba(122, 178, 211, 0.15);
    transform: translateY(-1px);
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`;

const Work: React.FC = () => {
  return (
    <WorkContainer>
      <PageHeader>
        <PageTitle>Professional Experience</PageTitle>
        <PageSubtitle>My journey in AI/ML and software engineering</PageSubtitle>
      </PageHeader>

      <Section>
       
        
        <JobItem>
          <JobTitle>
            <Brain size={28} />
            Software Engineer (AI/ML)
          </JobTitle>
          <CompanyName>
            <CompanyLink href="https://www.linkedin.com/company/brainstation-23/" target="_blank" rel="noopener noreferrer">
              Brain Station 23 PLC.
              <ExternalLink size={16} />
            </CompanyLink>
          </CompanyName>
          <JobPeriod>
            <Calendar size={18} />
            May 2025 - Present
          </JobPeriod>
          <JobDescription>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Multilingual Text-to-Speech System:</strong> Trained a custom end-to-end multilingual Text-to-Speech system from scratch on Bangla CommonVoice corpus, implementing dataset preprocessing, multi-speaker conditioning, and phoneme handling to enhance prosody and clarity. Designed efficient training pipelines leveraging GPU parallelism and performed systematic evaluation of pronunciation accuracy, speaker similarity, and intelligibility to ensure naturalness and robustness in generated speech.
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> Orpheus, XTTS v2, PyTorch, Librosa, CommonVoice, NCCL, SoundFile
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Real-time Workplace Analytics:</strong> Developed a real-time workplace analytics solution using multi-camera input, YOLOv11 for detection, ByteTrack for tracking, and Qwen‑2.5 for vision-language analysis. The system classifies individuals as active or idle, generates concise natural language activity summaries, and logs timestamped activity reports. Features include desk time tracking, effective work vs. idle period measurement, meeting hour estimation, collaboration intensity mapping, and stress-level detection through behavioral analysis.
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> YOLOv11, ByteTrack, Chain-of-Thought Prompting, Qwen‑2.5, BLIP‑2, OpenCV, Python, Flask, Temporal-Spatial Analytics, CSV Logging
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Cafeteria Monitoring System:</strong> Developed a vision-based cafeteria monitoring system that tracks real-time entry/exit counts, in-zone occupancy, and seating duration using multi-camera input. The system enables footfall analysis, peak hour detection, and capacity estimation, enhancing space utilization and service flow. Future-ready features like queue wait time estimation, role-based detection, and occupancy alerts are integrated into the design for scalable deployment.
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> YOLOv8, DeepSORT, OpenCV, Python, Flask, Zone Mapping, Temporal-Spatial Analytics, CSV Logging
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Group Identification System:</strong> Developed a robust group identification system by integrating YOLOv11 for detection, ByteTrack for tracking, and OSNet for ReID to infer social groups based on proximity, trajectory similarity, zone co-occurrence, and behavioral sync. Evaluated clustering methods (DBSCAN, Agglomerative) and vision-language models (GPT-4o, SmolVLM) to enhance semantic group reasoning for applications in surveillance and retail behavior analysis.
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> YOLOv11, ByteTrack, OSNet, TorchreID, DBSCAN, Agglomerative Clustering, GPT-4o, Smol‑VLM, OpenCV, Python
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Computer Vision PoCs:</strong> Conducted multiple PoCs in computer vision, focusing on re-identification, footfall analysis, and image generation to validate feasibility, assess performance, and inform scalable solution design.
              </ContentCard>
            </JobDescriptionItem>
          </JobDescription>
        </JobItem>

        <JobItem>
          <JobTitle>
            <Bot size={28} />
            Machine Learning Engineer
          </JobTitle>
          <CompanyName>
            <CompanyLink href="https://www.linkedin.com/company/anttroboticsltd/" target="_blank" rel="noopener noreferrer">
              ANTT Robotics Ltd
              <ExternalLink size={16} />
            </CompanyLink>
          </CompanyName>
          <JobPeriod>
            <Calendar size={18} />
            March 2024 - April 2025
          </JobPeriod>
          
          <JobDescription>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Team Leadership:</strong> Served as the Team Lead of the AI team, overseeing full-cycle project development, managing workflows, and ensuring the timely delivery of high-quality outputs. Also provided technical mentorship, encouraged knowledge sharing, and maintained strong performance standards across the team.
              </ContentCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Intelligent Gift Shop Chatbot:</strong> Developed an intelligent chatbot for gift shops to provide personalized gift recommendations and real-time product queries using Retrieval Augmented Generation (RAG). The solution integrates GPT-4, ChromaDB, and LangChain with a ReactJS interface and FastAPI backend to enhance customer engagement and streamline operations.
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> GPT-4, RAG, FastAPI, LangChain, ChromaDB, OpenAI Embeddings, ReactJS
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>ANTT AI Bot:</strong> Designed ANTT AI bot, a chatbot using fine-tuned Large Language Models (GPT-3.5, GPT-4o, and LLaMA-2) to generate code for Arduino, ESP32, and Raspberry Pi. It simplifies embedded systems programming by producing platform-specific code for tasks like sensor interfacing and actuator control, and has been tested on real hardware.
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> Prompt Engineering, LangChain, Python, GPT-3.5, GPT-4o, LLaMA-2
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Predictive Maintenance System:</strong> Developed a Predictive Maintenance web and mobile app for appliances, using time series and boosting models for real-time health monitoring. The system adapts by retraining models weekly with new data, provides real-time updates on key metrics like temperature, vibration, and energy use, and tracks shock events. Deployed on AWS EC2 and integrated with FastAPI, it optimizes appliance performance and reliability.
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> Python, Multiple Time Series Models, Boosting Algorithms, AWS EC2, Adaptive Learning Techniques, FastAPI, Data Analysis Tools
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>ANPR and Dynamic Toll Pricing:</strong> Developed a real-time ANPR and dynamic toll pricing system using YOLOv8 and OCR. It detects vehicle plates, calculates tolls based on vehicle type, time, and traffic, and is deployed on cloud infrastructure. The solution includes high-definition cameras and a user-friendly interface, optimizing toll collection efficiency.
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> Python, YOLOv8, OpenCV, Supervision, FastAPI, Ultralytics, PyQt5, ByteTrack
              </TechnologyCard>
            </JobDescriptionItem>
          </JobDescription>
        </JobItem>
      </Section>
    </WorkContainer>
  );
};

export default Work; 