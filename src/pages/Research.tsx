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

const ResearchArea = styled.div`
  margin-bottom: 4rem;
`;

const AreaTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
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
        My research explores various cutting-edge areas, including Medical Image Analysis, Explainable Artificial Intelligence, Computer Vision, Generative Adversarial Networks, Multimodal Deep Learning, Large Language Models, Natural Language Processing, Machine Learning, and the applications of Deep Learning.
      </ResearchIntro>

      <ResearchArea>
        <AreaTitle>
          <Microscope size={28} />
          1. Explainable AI in Medical Image Analysis
        </AreaTitle>
        <AreaDescription>
          Medical image analysis plays a important role in diagnosing and treating diseases, particularly in eye care and cancer treatment, using advanced machine learning models like convolutional neural networks (CNNs). However, the complexity of these models can make their decisions difficult to understand, which is problematic in clinical settings. To address this, explainable AI techniques clarify how CNNs classify eye conditions from retinal images, while new segmentation models accurately identify blood vessels, aiding in vascular health assessment. By combining classification and segmentation, doctors can make better decisions. For lung and colon cancer detection, explainable AI also helps healthcare professionals understand and trust the predictions, improving patient communication and outcomes.
        </AreaDescription>
        
        <PaperItem>
          + <PaperTitle>Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification</PaperTitle>. Mukaffi Bin Moin, Fatema Tuj Johora Faria, Swarnajit Saha, Busra Kamal Rafa, Mohammad Shafiul Alam. <PaperStatus>Presented in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</PaperStatus>. [<PaperLink href="https://arxiv.org/pdf/2405.04610" target="_blank" rel="noopener noreferrer">PDF <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
        <PaperItem>
          + <PaperTitle>Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images</PaperTitle>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Pronay Debnath, Asif Iftekher Fahim, Faisal Muhammad Shah. <PaperStatus>Under Review in Journal of Visual Communication and Image Representation</PaperStatus>. [<PaperLink href="https://arxiv.org/pdf/2405.07338" target="_blank" rel="noopener noreferrer">PDF <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <Sparkles size={28} />
          2. Multimodal Deep Learning
        </AreaTitle>
        <AreaDescription>
          Multimodal deep learning improves understanding by combining images and text using three techniques: early, late, and intermediate fusion. Early fusion merges raw images and text before processing, allowing shared representation but risking noise sensitivity. Late fusion processes them separately, offering flexibility but possibly missing important connections. Intermediate fusion combines features at different stages, balancing the strengths of both data types. A challenge for Bangla language applications is the lack of diverse annotated image-text datasets. Bangla's unique features complicate text processing, and without specialized models, areas like fake news detection and disaster identification are difficult to improve. Custom models are needed to address these challenges in Bangla.
        </AreaDescription>
        
        <PaperItem>
          + <PaperTitle>Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</PaperTitle>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Md. Mahfuzur Rahman, Md Morshed Alam Shanto, Asif Iftekher Fahim and Md. Moinul Hoque. <PaperStatus>Presented in 18th International Conference on Information Technology and Applications (ICITA 2024)</PaperStatus>. [<PaperLink href="https://arxiv.org/pdf/2409.09504" target="_blank" rel="noopener noreferrer">PDF <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
        <PaperItem>
          + <PaperTitle>BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language</PaperTitle>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, and M. F. Mridha. <PaperStatus>Under Review in International Journal of Disaster Risk Reduction</PaperStatus>.
        </PaperItem>
        <PaperItem>
          + <PaperTitle>MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts</PaperTitle>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Md Arafat Alam Khandaker, Niful Islam, Khan Md Hasib, Md Saddam Hossain Mukta, and M. F. Mridha. <PaperStatus>Under Review in International Journal of Information Management Data Insights</PaperStatus>.
        </PaperItem>
        <PaperItem>
          + <PaperTitle>BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes</PaperTitle>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Asif Iftekher Fahim, Pronay Debnath, and Faisal Muhammad Shah. <PaperStatus>Submitted to an A* Rank Conference</PaperStatus>.
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <Brain size={28} />
          3. Sentiment Analysis and Assessing the Level of Toxicity in Social Media
        </AreaTitle>
        <AreaDescription>
          Sentiment analysis categorizes emotions in text as positive, negative, or neutral, while toxic comment detection focuses on identifying harmful or abusive language, such as personal attacks and discriminatory remarks. Both are crucial in today's online environment. Large Language Models (LLMs) like Gemini 1.5 Pro and GPT-3.5 Turbo have transformed NLP by learning from raw text, improving performance in tasks like sentiment analysis and toxic comment detection, especially for low-resource languages like Bangla. Sensitive topics such as transgender rights, indigenous issues, and migration are frequent targets of toxic language, but traditional models struggle due to the lack of curated datasets in Bangla. LLMs help mitigate this by performing well even with limited data, but high-quality, issue-specific datasets are still necessary to enhance accuracy, foster inclusivity, and protect marginalized communities from harmful content. Accurate models are essential for detecting toxicity, promoting fairness, and improving comment classification, particularly in languages with fewer resources like Bangla.
        </AreaDescription>
        
        <PaperItem>
          + <PaperTitle>Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</PaperTitle>. Fatema Tuj Johora Faria*, Mukaffi Bin Moin*, Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy and Mohammad Shafiul Alam. <PaperStatus>Presented in The IEEE Region 10 Symposium (TENSYMP 2024)</PaperStatus>. [<PaperLink href="https://arxiv.org/pdf/2407.19528" target="_blank" rel="noopener noreferrer">PDF <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
        <PaperItem>
          + <PaperTitle>Assessing the Level of Toxicity Against Distinct Groups in Bangla Social Media Comments: A Comprehensive Investigation</PaperTitle>. Mukaffi Bin Moin, Pronay Debnath, Usafa Akther Rifa, Rijeet Bin Anis. <PaperStatus>Presented in 18th International Conference on Information Technology and Applications (ICITA 2024)</PaperStatus>. [<PaperLink href="https://arxiv.org/pdf/2409.17130" target="_blank" rel="noopener noreferrer">PDF <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <BookOpen size={28} />
          4. Natural Language Inference
        </AreaTitle>
        <AreaDescription>
          Natural Language Inference (NLI) is a crucial NLP task that determines whether a premise supports, contradicts, or is unrelated to a hypothesis, aiding applications like question answering, information retrieval, and chatbots. NLI has three categories: entailment (the hypothesis follows from the premise), contradiction (both cannot be true), and neutral (the hypothesis is independent of the premise). It is especially important for languages like Bangla, improving NLP models' ability to interpret Bangla text and meet the growing demand for tools like chatbots and virtual assistants. Large Language Models (LLMs) enhance NLI by learning subtle sentence relationships and can be fine-tuned for specific tasks, making them effective even with limited labeled data.
        </AreaDescription>
        
        <PaperItem>
          + <PaperTitle>Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study</PaperTitle>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Asif Iftekher Fahim, Pronay Debnath, Faisal Muhammad Shah. <PaperStatus>Presented in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</PaperStatus>. [<PaperLink href="https://arxiv.org/pdf/2405.02937" target="_blank" rel="noopener noreferrer">PDF <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <FileText size={28} />
          5. Text Generation in Bengali
        </AreaTitle>
        <AreaDescription>
          Text generation in NLP involves creating human-like text using models, with tasks like paraphrase generation, reading comprehension, and formal document creation. Large Language Models (LLMs) excel at understanding context and generating varied expressions of the same idea, which is useful for Bengali educational content and creative writing. Fine-tuning LLMs with Bengali datasets enhances their ability to answer questions, summarize information, and generate formal documents, aided by techniques like Retrieval-Augmented Generation (RAG). In the mental health domain, LLMs can offer empathetic, culturally relevant advice by training on specialized datasets. While challenges like limited data hinder development for low-resource languages like Bangla, methods like fine-tuning and few-shot learning help LLMs perform well. Ethical considerations are vital to ensure generated content, especially in mental health, is safe, reliable, and culturally sensitive.
        </AreaDescription>
        
        <PaperItem>
          + <PaperTitle>Tackling Hallucination in Bengali NLP: Enhancing Paraphrase Generation, Reading Comprehension, and Formal Application Writing Using LLMs with Few-Shot Learning, Fine-Tuning, and RAG</PaperTitle>. Saidur Rahman Sujon, Ahmadul Karim Chowdhury, Fatema Tuj Johora Faria, Mukaffi Bin Moin and Faisal Muhammad Shah. <PaperStatus>Submitted to an A* Rank Conference</PaperStatus>.
        </PaperItem>
        
        <OngoingWork>
          + <PaperTitle>Leveraging LLMs for Mental Health Advice Generation in Low-Resource Bangla Language</PaperTitle>.
        </OngoingWork>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <Eye size={28} />
          6. Image-to-Text Generation
        </AreaTitle>
        <AreaDescription>
          Image-to-text generation in agriculture, particularly for disease diagnosis and recommendations, is a growing field with great potential. Large vision models like LLaMA 1.5, InstructBLIP, GPT-4, and Fuyu can analyze and interpret visual features in plant images, such as color changes, texture, and shapes, to accurately diagnose plant diseases. These models generate detailed textual descriptions, explaining the disease, its symptoms, and suggesting treatments. Key applications include identifying plant diseases through visual symptoms like discoloration or wilting, helping farmers and agronomists make informed decisions for effective disease management.
        </AreaDescription>
        
        <OngoingWork>
          + <PaperTitle>Image-to-Text Generation for Agricultural Disease Diagnosis and Recommendations</PaperTitle>.
        </OngoingWork>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <Heart size={28} />
          7. Natural Language Processing for Medical Question Answering
        </AreaTitle>
        <AreaDescription>
          Developing a question-answering (QA) system in low-resource languages like Bangla, particularly in the medical field, presents challenges due to limited datasets and pre-trained models. The system must process medical literature, clinical notes, and patient records to respond accurately to queries, despite the scarcity of Bangla medical resources. It also needs to handle complex medical terminology and English code-switching. Such a system could support healthcare professionals in making informed decisions, especially in rural areas, and improve patient education by answering medical questions in Bangla. Addressing various question types (factoid, list, confirmation, etc.), it must overcome data scarcity through methods like crowdsourcing and domain expert involvement to build annotated medical datasets in Bangla.
        </AreaDescription>
        
        <OngoingWork>
          + <PaperTitle>BanglaMedQA: A Comprehensive Benchmark Dataset for Medical Question Answering</PaperTitle>.
        </OngoingWork>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <Globe size={28} />
          8. Machine Translation and Regional Dialect Detection
        </AreaTitle>
        <AreaDescription>
          Machine Translation (MT) in natural language processing (NLP) helps automatically translate text between languages, with Transformer models improving translation speed and accuracy. However, for low-resource languages, including dialects spoken by marginalized communities, there are challenges due to limited linguistic resources like annotated datasets. In Bangladesh, regional Bangla dialects such as those from Sylhet, Noakhali, and Mymensingh differ significantly from Standard Bangla, creating challenges for Dialect Machine Translation (DMT). These dialects have unique expressions that may not easily translate, and the lack of dialect-specific datasets further complicates model development. Similarly, Dialect Text Classification organizes text by dialect, enabling applications like regional content targeting, public sentiment analysis, and social media insights. Both tasks require careful handling of dialect variability and cultural nuances for effective translation and classification.
        </AreaDescription>
        
        <PaperItem>
          + <PaperTitle>Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language</PaperTitle>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Ahmed Al Wase, Mehidi Ahmmed, Md Rabius Sani, and Tashreef Muhammad. <PaperStatus>Under Review in Neural Computing and Applications</PaperStatus>. [<PaperLink href="https://arxiv.org/pdf/2311.11142" target="_blank" rel="noopener noreferrer">PDF <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <Sparkles size={28} />
          9. Generative Adversarial Networks in Agriculture
        </AreaTitle>
        <AreaDescription>
          Generative Adversarial Networks (GANs) have transformed machine learning, particularly in agriculture, by enabling synthetic data generation to improve disease detection, such as for potato crops. Gathering images of infected potatoes at various stages is often difficult, but GANs create realistic, diverse images that enhance training datasets, improving models' ability to generalize and diagnose diseases accurately. This innovation helps researchers and farmers develop more effective diagnostic tools. Additionally, explainable AI builds trust by offering transparency in disease classification, fostering confidence among agricultural professionals. Instance segmentation further aids potato disease detection by identifying infected areas at the pixel level, enabling precise analysis of diseases like Black Scurf, Common Scab, Dry Rot, and Pink Rot. This technique helps differentiate between healthy and diseased tissues, assess disease severity, and track its progression, allowing for timely interventions and better crop management.
        </AreaDescription>
        
        <PaperItem>
          + <PaperTitle>PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification</PaperTitle>. Mohammad Shafiul Alam*, Fatema Tuj Johora Faria*, Mukaffi Bin Moin*, Ahmed Al Wase, Md. Rabius Sani and Khan Md Hasib. <PaperStatus>Under Review in Journal of Intelligent Information Systems</PaperStatus>. [<PaperLink href="https://arxiv.org/pdf/2405.07332" target="_blank" rel="noopener noreferrer">PDF <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle>
          <Leaf size={28} />
          10. Computer Vision Applications in Agriculture
        </AreaTitle>
        <AreaDescription>
          Disease classification is essential for sustainable farming and food security, as crop diseases can cause financial losses and disrupt food supply chains. Timely detection helps manage outbreaks and ensure healthy yields. Potatoes, a key staple, are prone to diseases like Black Scurf and Common Scab. Machine learning, particularly convolutional neural networks (CNNs), effectively detect such diseases by analyzing spatial patterns in images. Hybrid models that combine CNNs with LSTM, GRU, and Bi-LSTM architectures enhance predictions by capturing both spatial features and the progression of symptoms over time, enabling more robust and comprehensive disease detection.
        </AreaDescription>
        
        <PaperItem>
          + <PaperTitle>Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework</PaperTitle>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Ahmed Al Wase, Md Rabius Sani, Khan Md Hasib, and Mohammad Shafiul Alam. <PaperStatus>2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)</PaperStatus>. [<PaperLink href="https://ieeexplore.ieee.org/document/10099162" target="_blank" rel="noopener noreferrer">Paper <ExternalLink size={14} /></PaperLink>]
        </PaperItem>
      </ResearchArea>
    </ResearchContainer>
  );
};

export default Research; 