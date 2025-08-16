import React from 'react';
import styled from 'styled-components';
import { Brain, Eye, Sparkles, BookOpen, Heart, Microscope, Leaf, ShieldCheck, Globe } from 'lucide-react';

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

const PaperItem = styled.div`
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.7;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
`;

const PaperTitle = styled.span`
  color: #1e293b;
  font-weight: 700;
  font-size: 1.05rem;
`;

const Research: React.FC = () => {
  return (
    <ResearchContainer>
      <ResearchTitle>Research Areas</ResearchTitle>
      <ResearchIntro>
        My research spans Natural Language Processing, Multimodal AI, and Computer Vision, focusing on low-resource languages, social media analysis, large language models, trustworthy AI, and healthcare applications.
      </ResearchIntro>

      {/* NLP Category */}
      <CategoryTitle>1. Natural Language Processing (NLP)</CategoryTitle>

      <ResearchArea>
        <AreaTitle><Brain size={24}/> Social Media Analysis</AreaTitle>
        <PaperItem>
  + <PaperTitle>Motamot: A Dataset for Revealing the Supremacy of Large Language Models Over Transformer Models in Bengali Political Sentiment Analysis</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>Assessing the Level of Toxicity Against Distinct Groups in Bangla Social Media Comments: A Comprehensive Investigation</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>FanSpeak: A Bangla Dataset for Multi-Class Toxicity Detection in Sports Discourse and a Comparative Evaluation of PLMs and LLMs</PaperTitle>
</PaperItem>

      </ResearchArea>
      <ResearchArea>
        <AreaTitle><Heart size={24}/> AI for Healthcare</AreaTitle>
        <PaperItem>
  + <PaperTitle>MindSpeak-Bangla: A Human–LLM Collaborative Dataset for Chain-of-Thought Adaptation in Bangla Mental Health Advice Generation</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>BanglaMedQA: A Dataset for Adapting Zero-Shot Chain-of-Thought Reasoning in Bengali Medical Question Answering</PaperTitle>
</PaperItem>
      </ResearchArea>
      <ResearchArea>
        <AreaTitle><Sparkles size={24}/> Large Language Models (LLMs) </AreaTitle>
        <PaperItem>
  + <PaperTitle>Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>Tackling Hallucination in Bengali NLP: Enhancing Paraphrase Generation, Reading Comprehension, and Formal Application Writing Using LLMs with Few-Shot Learning, Fine-Tuning, and RAG</PaperTitle>
</PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle><ShieldCheck size={24}/> Trustworthy AI</AreaTitle>
        <PaperItem>
  + <PaperTitle>Cross-Cultural Moral Bias Detection in Story Understanding: Analyzing Intentionality and Fairness in LLM Judgments</PaperTitle>
</PaperItem>

        <PaperItem>
  + <PaperTitle>Breaking Silence: A Jailbreaking Prompt Framework for Generating Sensitive and Controversial Narratives in Bangla</PaperTitle>
</PaperItem>

      </ResearchArea>



      {/* Multimodal Category */}
      <CategoryTitle>2. Multimodal AI</CategoryTitle>

      <ResearchArea>
        <AreaTitle><Globe size={24}/> Low-Resource Languages</AreaTitle>
        <PaperItem>
  + <PaperTitle>Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes</PaperTitle>
</PaperItem>

      </ResearchArea>

  

      {/* CV Category */}
      <CategoryTitle>3. Computer Vision (CV)</CategoryTitle>

      <ResearchArea>
        <AreaTitle><Microscope size={24}/> AI for Healthcare</AreaTitle>
       <PaperItem>
  + <PaperTitle>Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images</PaperTitle>
</PaperItem>

      </ResearchArea>

  

      <ResearchArea>
        <AreaTitle><Leaf size={24}/> Computer Vision Applications in Agriculture (Agriculture)</AreaTitle>
       <PaperItem>
  + <PaperTitle>Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification</PaperTitle>
</PaperItem>

      </ResearchArea>

    </ResearchContainer>
  );
};

export default Research;
