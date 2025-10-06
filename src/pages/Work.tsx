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
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: none;
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
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`;

const BulletList = styled.ul`
  margin: 0.6rem 0 0 1.2rem;
  padding: 0;
  list-style-type: disc;
`;

const BulletItem = styled.li`
  margin-bottom: 0.6rem;
`;

const TechnologyCard = styled.div`
  background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 100%);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: #4A628A;
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
                <strong>Agentic Footfall Monitoring and Analytics Platform</strong>
                <BulletList>
                  <BulletItem>Led a real-time footfall analytics platform using agentic multi‑VLM architecture (GPT‑4, Gemini, Qwen‑2.5, BLIP‑2) for autonomous perception and reasoning across multi‑camera environments.</BulletItem>
                  <BulletItem>Integrated YOLOv11 and ByteTrack for detection and tracking, enabling accurate multi‑camera identity association with temporal consistency.</BulletItem>
                  <BulletItem>Applied Tree‑of‑Thought prompting for collaborative ambiguity resolution, crowd dynamics interpretation, and coherent contextual insights.</BulletItem>
                  <BulletItem>Implemented hybrid identity matching with visual (ReID) and semantic (text) embeddings for better cross‑frame and cross‑camera consistency.</BulletItem>
                  <BulletItem>Introduced an LLM‑based verification layer to confirm/reject matches, reducing false positives and improving re‑identification reliability.</BulletItem>
                  <BulletItem>Optimized embedding pipeline and similarity search via adaptive thresholds and intelligent LLM bypass for low‑latency scalability.</BulletItem>
                  <BulletItem>Achieved 0.962 re‑identification accuracy using a VLM‑centric approach vs. 0.829 with traditional ReID.</BulletItem>
                  <BulletItem>Built a React visualization interface supporting text, image, and hybrid similarity search for intuitive analytics.</BulletItem>
                  <BulletItem>Engineered temporal–spatial analytics generating natural‑language summaries of entries/exits, occupancy, and movement trends.</BulletItem>
                  <BulletItem>Led architecture, scalability planning, deployment strategy, and mentored junior developers for a modular, production‑grade system.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> GPT-4, Gemini, Qwen-2.5, Tree-of-Thought Prompting, Multi-Agent Reasoning, Vector DB, Temporal-Spatial Analytics, YOLO11, ByteTrack
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Bangla Text-to-Speech (TTS)</strong>
                <BulletList>
                  <BulletItem>Developed a Bangla TTS system from scratch using an in‑house multi‑speaker corpus.</BulletItem>
                  <BulletItem>Preprocessed/curated data: text normalization, phoneme extraction, and audio alignment.</BulletItem>
                  <BulletItem>Implemented multi‑speaker conditioning and phoneme‑level modeling for clarity and differentiation.</BulletItem>
                  <BulletItem>Enhanced prosody for expressive, human‑like intonation and naturalness.</BulletItem>
                  <BulletItem>Designed GPU‑parallel training pipelines with PyTorch and NCCL for scalable efficiency.</BulletItem>
                  <BulletItem>Evaluated pronunciation accuracy, speaker similarity, and intelligibility for robustness.</BulletItem>
                  <BulletItem>Built a scalable architecture for large datasets and multiple speakers.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> xTTSv2, Orpheus, PyTorch, NCCL, CUDA, Speech Processing Libraries, Phoneme Modeling, Multi-Speaker TTS Techniques
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>BS23 Workplace Monitoring & Analytics Platform</strong>
                <BulletList>
                  <BulletItem>Built a real‑time workplace/desk monitoring platform with multi‑camera input.</BulletItem>
                  <BulletItem>Integrated YOLOv11 for detection and ByteTrack/DeepSORT for tracking.</BulletItem>
                  <BulletItem>Used Qwen‑2.5/BLIP‑2 for vision‑language analysis and activity classification (active vs idle).</BulletItem>
                  <BulletItem>Monitored occupancy, entries/exits, seating duration, and meeting participation using non‑intrusive signals.</BulletItem>
                  <BulletItem>Implemented privacy‑conscious, consistent ID tracking without facial recognition.</BulletItem>
                  <BulletItem>Generated timestamped NL summaries, logs, and visual playback for productivity insights.</BulletItem>
                  <BulletItem>Added collaboration intensity mapping, stress estimation, and temporal‑spatial analytics.</BulletItem>
                  <BulletItem>Designed for scalability: queue wait times, role‑based detection, peak hours, occupancy alerts.</BulletItem>
                  <BulletItem>Delivered full‑stack solution with Python (FastAPI), OpenCV, CSV logging, and AI/ML models.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> YOLOv11, ByteTrack, DeepSORT, Qwen-2.5, BLIP-2, Chain-of-Thought Prompting, OpenCV, Python, FastAPI, Temporal-Spatial Analytics, Zone Mapping, CSV Logging
              </TechnologyCard>
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
                <strong>Gift Shop Intelligent Chatbot</strong>
                <BulletList>
                  <BulletItem>Developed a chatbot for personalized gift recommendations and real‑time queries using RAG.</BulletItem>
                  <BulletItem>Integrated GPT‑4, ChromaDB, and LangChain with ReactJS frontend and FastAPI backend.</BulletItem>
                  <BulletItem>Enabled retrieval of product info and tailored suggestions to boost engagement and sales.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> GPT-4, RAG, FastAPI, LangChain, ChromaDB, OpenAI Embeddings, ReactJS
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>ANTT AI Bot</strong>
                <BulletList>
                  <BulletItem>Designed a chatbot using fine‑tuned LLMs (GPT‑3.5, GPT‑4o, LLaMA‑2) to generate platform‑specific code.</BulletItem>
                  <BulletItem>Produced code for Arduino, ESP32, and Raspberry Pi covering sensors, actuators, and device comms.</BulletItem>
                  <BulletItem>Validated on real hardware to ensure reliability and correctness.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> Prompt Engineering, LangChain, Python, GPT-3.5, GPT-4o, LLaMA-2
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Predictive Maintenance Platform for Appliances</strong>
                <BulletList>
                  <BulletItem>Built web/mobile predictive maintenance with time series and boosting models.</BulletItem>
                  <BulletItem>Implemented weekly retraining with new operational data for adaptive learning.</BulletItem>
                  <BulletItem>Streamed real‑time metrics: temperature, vibration, energy usage, shock events.</BulletItem>
                  <BulletItem>Deployed on AWS EC2 with FastAPI backend for scalable device monitoring.</BulletItem>
                  <BulletItem>Managed end‑to‑end delivery; mentored the AI team and ensured timelines/quality.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Technology used:</strong> Python, Multiple Time Series Models, Boosting Algorithms, AWS EC2, Adaptive Learning Techniques, FastAPI, Data Analysis Tools
              </TechnologyCard>
            </JobDescriptionItem>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Real-Time ANPR and Dynamic Toll Pricing System</strong>
                <BulletList>
                  <BulletItem>Developed real‑time ANPR and dynamic toll pricing with YOLOv8 and OCR.</BulletItem>
                  <BulletItem>Calculated tolls by vehicle type, time, and traffic; deployed on cloud infra.</BulletItem>
                  <BulletItem>Integrated HD cameras and a user‑friendly UI to improve efficiency and reduce manual work.</BulletItem>
                </BulletList>
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