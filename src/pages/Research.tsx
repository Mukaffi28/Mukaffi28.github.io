import React from 'react';
import styled from 'styled-components';
import { Brain, Eye, Sparkles, BookOpen, Award, Zap, Heart, Globe, Leaf, Microscope, FileText, ExternalLink } from 'lucide-react';

const ResearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ResearchTitle = styled.h1`
  color: #1e293b;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ResearchIntro = styled.p`
  text-align: center;
  color: #475569;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #006098ff, #0048c5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ResearchArea = styled.div`
  margin-bottom: 4rem;
`;

const AreaTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #54a3d1ff, #7AB2D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, #7AB2D3, transparent);
    border-radius: 1px;
  }
`;

const AreaDescription = styled.p`
  text-align: justify;
  color: #475569;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #B9E5E8;
`;

const PaperItem = styled.div`
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.7;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A, #B9E5E8);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const PaperTitle = styled.span`
  color: #1e293b;
  font-weight: 700;
  font-size: 1.05rem;
`;

const PaperStatus = styled.span`
  color: #7AB2D3;
  font-style: italic;
  font-weight: 600;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-left: 12px;
`;

const PaperLink = styled.a`
  color: #7AB2D3;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
    transform: translateY(-1px);
  }
`;

const OngoingWork = styled.div`
  margin-top: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  font-weight: 700;
  padding: 1.5rem;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  border: 1px solid #7AB2D3;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '🚧';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    opacity: 0.7;
  }
`;

const Research: React.FC = () => {
  return (
    <ResearchContainer>
      <ResearchTitle>Research Areas</ResearchTitle>
      
      <ResearchIntro>
        Natural Language Processing (NLP), Multimodal AI, Computer Vision, Vision-Language Models, Large Language Models, LLM Agents, AI for Healthcare.
      </ResearchIntro>

      {/* NLP Category */}
      <CategoryTitle>Natural Language Processing (NLP)</CategoryTitle>

      <ResearchArea>
        <AreaTitle><Brain size={28} />1. Sentiment Analysis and Assessing the Level of Toxicity in Social Media</AreaTitle>
        <AreaDescription>
          Sentiment analysis categorizes emotions in text as positive, negative, or neutral, while toxic comment detection focuses on identifying harmful or abusive language...
        </AreaDescription>
        <PaperItem>
          + <PaperTitle>Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</PaperTitle>. Fatema Tuj Johora Faria*, Mukaffi Bin Moin*...
        </PaperItem>
        <PaperItem>
          + <PaperTitle>FanSpeak: A Bangla Dataset for Multi-Class Toxicity Detection in Sports Discourse and a Comparative Evaluation of PLMs and LLMs</PaperTitle>. Under Review.
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle><BookOpen size={28} />2. Natural Language Inference</AreaTitle>
        <AreaDescription>
          Natural Language Inference (NLI) is a crucial NLP task that determines whether a premise supports, contradicts, or is unrelated to a hypothesis...
        </AreaDescription>
        <PaperItem>
          + <PaperTitle>Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study</PaperTitle>. Presented in ICCCNet-2024.
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle><FileText size={28} />3. Text Generation in Bengali</AreaTitle>
        <AreaDescription>
          Text generation in NLP involves creating human-like text using models, with tasks like paraphrase generation, reading comprehension, and formal document creation...
        </AreaDescription>
        <PaperItem>
          + <PaperTitle>Tackling Hallucination in Bengali NLP: Enhancing Paraphrase Generation, Reading Comprehension, and Formal Application Writing Using LLMs...</PaperTitle>.
        </PaperItem>
        <OngoingWork>
          + <PaperTitle>MindSpeak-Bangla: A HumanLLM Collaborative Dataset for Chain-of-Thought Adaptation in Bangla Mental Health Advice Generation</PaperTitle>.
        </OngoingWork>
      </ResearchArea>

      {/* Multimodal Category */}
      <CategoryTitle>Multimodal AI</CategoryTitle>

      <ResearchArea>
        <AreaTitle><Sparkles size={28} />1. Multimodal Deep Learning</AreaTitle>
        <AreaDescription>
          Multimodal deep learning improves understanding by combining images and text...
        </AreaDescription>
        <PaperItem>
          + <PaperTitle>Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</PaperTitle>. Presented in ICITA 2024.
        </PaperItem>
        <PaperItem>
          + <PaperTitle>BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language</PaperTitle>. Under Review.
        </PaperItem>
        <PaperItem>
          + <PaperTitle>MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts</PaperTitle>. Under Review.
        </PaperItem>
        <PaperItem>
          + <PaperTitle>BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes</PaperTitle>. Submitted to an A* Rank Conference.
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle><Eye size={28} />2. Image-to-Text Generation</AreaTitle>
        <AreaDescription>
          Image-to-text generation in agriculture, particularly for disease diagnosis and recommendations, is a growing field with great potential...
        </AreaDescription>
        <OngoingWork>
          + <PaperTitle>Image-to-Text Generation for Agricultural Disease Diagnosis and Recommendations</PaperTitle>.
        </OngoingWork>
      </ResearchArea>

      {/* Computer Vision Category */}
      <CategoryTitle>Computer Vision</CategoryTitle>

      <ResearchArea>
        <AreaTitle><Microscope size={28} />1. Explainable AI in Medical Image Analysis</AreaTitle>
        <AreaDescription>
          Medical image analysis plays an important role in diagnosing and treating diseases...
        </AreaDescription>
        <PaperItem>
          + <PaperTitle>Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification</PaperTitle>. Presented in ICCCNet-2024.
        </PaperItem>
        <PaperItem>
          + <PaperTitle>Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models...</PaperTitle>. Under Review.
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle><Leaf size={28} />2. Computer Vision Applications in Agriculture</AreaTitle>
        <AreaDescription>
          Disease classification is essential for sustainable farming and food security...
        </AreaDescription>
        <PaperItem>
          + <PaperTitle>Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework</PaperTitle>. CCWC 2023.
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle><Sparkles size={28} />3. Generative Adversarial Networks in Agriculture</AreaTitle>
        <AreaDescription>
          Generative Adversarial Networks (GANs) have transformed machine learning, particularly in agriculture...
        </AreaDescription>
        <PaperItem>
          + <PaperTitle>PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification</PaperTitle>. Under Review.
        </PaperItem>
      </ResearchArea>
    </ResearchContainer>
  );
};

export default Research;
