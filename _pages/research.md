---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---
<p style="text-align:justify; color:black; font-family:Georgia">
My research explores various areas, including Medical Image Analysis, Explainable Artificial Intelligence, Computer Vision, Generative Adversarial Networks, Multimodal Deep Learning, Large Language Models, Natural Language Processing, Machine Learning, and the applications of Deep Learning.
</p> 

## 1. Explainable AI in Medical Image Analysis

<p style="text-align:justify; color:black; font-family:Georgia"> 
Medical image analysis plays a important role in diagnosing and treating diseases, particularly in eye care and cancer treatment, using advanced machine learning models like convolutional neural networks (CNNs). However, the complexity of these models can make their decisions difficult to understand, which is problematic in clinical settings. To address this, explainable AI techniques clarify how CNNs classify eye conditions from retinal images, while new segmentation models accurately identify blood vessels, aiding in vascular health assessment. By combining classification and segmentation, doctors can make better decisions. For lung and colon cancer detection, explainable AI also helps healthcare professionals understand and trust the predictions, improving patient communication and outcomes.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification</span>. Mukaffi Bin Moin, Fatema Tuj Johora Faria, Swarnajit Saha, Busra Kamal Rafa, Mohammad Shafiul Alam. <span style="color:green;"><em>Presented  in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2405.04610)</span>  
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Pronay Debnath, Asif Iftekher Fahim, Faisal Muhammad Shah. <span style="color:green;"><em> Under Review in Journal of Visual Communication and Image Representation</em></span>. [[PDF]](https://arxiv.org/pdf/2405.07338)</span>   

## 2. Multimodal Deep Learning
<p style="text-align:justify; color:black; font-family:Georgia">
Multimodal deep learning improves understanding by combining images and text using three techniques: early, late, and intermediate fusion. Early fusion merges raw images and text before processing, allowing shared representation but risking noise sensitivity. Late fusion processes them separately, offering flexibility but possibly missing important connections. Intermediate fusion combines features at different stages, balancing the strengths of both data types. A challenge for Bangla language applications is the lack of diverse annotated image-text datasets. Bangla's unique features complicate text processing, and without specialized models, areas like fake news detection and disaster identification are difficult to improve. Custom models are needed to address these challenges in Bangla.
<!-- Multimodal deep learning is a method that improves understanding by combining images and text. This approach uses three main techniques: early fusion, late fusion, and intermediate fusion. In early fusion, raw images and text are combined into a single input before the model processes them. This allows the model to learn a shared representation, but it can also make it sensitive to noise from either the images or the text. Late fusion works differently. Here, images and text are processed separately using different models. The results are combined later on. This method is flexible and allows each model to be optimized independently, but it might miss important connections between the two modalities that could improve performance. Intermediate fusion is a middle ground. It combines features from images and text at different stages of processing. This way, it keeps the unique qualities of each type of data while also sharing useful information between them. A major challenge in using multimodal deep learning for the Bangla language is the lack of annotated datasets that pair images and text. Most existing datasets are not diverse enough, which can lead to models that don't work well in different situations. There is still a significant need for high-quality, labeled image-text datasets in Bangla. The Bangla language has unique features, such as context, idiomatic expressions, and cultural references, which make multimodal learning more complex. Common text processing techniques often struggle to capture these nuances, making it hard to integrate text with images effectively. Different applications, like detecting fake news or identifying disasters, require specific ways to combine data and train models. For example, fake news detection needs to focus on language and feelings, while disaster identification relies on visual information and real-time data. The lack of specialized multimodal models for Bangla makes it hard to improve performance in these areas. Without custom models, it's difficult to solve the unique challenges that Bangla speakers face. To make the most of multimodal learning, we need to create models that meet the specific needs of these applications in the Bangla context. -->
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Md. Mahfuzur Rahman, Md Morshed Alam Shanto, Asif Iftekher Fahim and Md. Moinul Hoque. <span style="color:green;"><em> Presented  in 18th International Conference on Information Technology and Applications (ICITA 2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2409.09504)</span>   

+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language
</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, and M. F. Mridha. <span style="color:green;"><em> Under Review in International Journal of Disaster Risk Reduction</em></span>.</span>  


+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts </span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Md Arafat Alam Khandaker, Niful Islam, Khan Md Hasib, Md Saddam Hossain Mukta, and M. F. Mridha. <span style="color:green;"><em> Under Review in International Journal of Information Management Data Insights </em></span>.</span>  


+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Asif Iftekher Fahim, Pronay Debnath, and Faisal Muhammad Shah. <span style="color:green;"><em> Submitted to an A* Rank Conference</em></span>.</span>  


## 3. Sentiment Analysis and Assessing the Level of Toxicity in Social Media 
<p style="text-align:justify; color:black; font-family:Georgia">
Sentiment analysis categorizes emotions in text as positive, negative, or neutral, while toxic comment detection focuses on identifying harmful or abusive language, such as personal attacks and discriminatory remarks. Both are crucial in today’s online environment. Large Language Models (LLMs) like Gemini 1.5 Pro and GPT-3.5 Turbo have transformed NLP by learning from raw text, improving performance in tasks like sentiment analysis and toxic comment detection, especially for low-resource languages like Bangla. Sensitive topics such as transgender rights, indigenous issues, and migration are frequent targets of toxic language, but traditional models struggle due to the lack of curated datasets in Bangla. LLMs help mitigate this by performing well even with limited data, but high-quality, issue-specific datasets are still necessary to enhance accuracy, foster inclusivity, and protect marginalized communities from harmful content. Accurate models are essential for detecting toxicity, promoting fairness, and improving comment classification, particularly in languages with fewer resources like Bangla.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis</span>. Fatema Tuj Johora Faria<b>*</b>, Mukaffi Bin Moin<b>*</b>, Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy and Mohammad Shafiul Alam <span style="color:green;"><em> Presented in The IEEE Region 10 Symposium (TENSYMP 2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2407.19528)</span>   

+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Assessing the Level of Toxicity Against Distinct Groups in Bangla Social Media Comments: A Comprehensive Investigation </span>. Mukaffi Bin Moin, Pronay Debnath, Usafa Akther Rifa, Rijeet Bin Anis. <span style="color:green;"><em> Presented  in 18th International Conference on Information Technology and Applications (ICITA 2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2409.17130)</span>  

## 4. Natural Language Inference 
<p style="text-align:justify; color:black; font-family:Georgia"> 
Natural Language Inference (NLI) is a crucial NLP task that determines whether a premise supports, contradicts, or is unrelated to a hypothesis, aiding applications like question answering, information retrieval, and chatbots. NLI has three categories: entailment (the hypothesis follows from the premise), contradiction (both cannot be true), and neutral (the hypothesis is independent of the premise). It is especially important for languages like Bangla, improving NLP models' ability to interpret Bangla text and meet the growing demand for tools like chatbots and virtual assistants. Large Language Models (LLMs) enhance NLI by learning subtle sentence relationships and can be fine-tuned for specific tasks, making them effective even with limited labeled data.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Asif Iftekher Fahim, Pronay Debnath, Faisal Muhammad Shah <span style="color:green;"><em> Presented in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em></span>. [[PDF]](https://arxiv.org/pdf/2405.02937)</span>   

## 5. Text Generation in Bengali

<p style="text-align:justify; color:black; font-family:Georgia"> 
Text generation in NLP involves creating human-like text using models, with tasks like paraphrase generation, reading comprehension, and formal document creation. Large Language Models (LLMs) excel at understanding context and generating varied expressions of the same idea, which is useful for Bengali educational content and creative writing. Fine-tuning LLMs with Bengali datasets enhances their ability to answer questions, summarize information, and generate formal documents, aided by techniques like Retrieval-Augmented Generation (RAG). In the mental health domain, LLMs can offer empathetic, culturally relevant advice by training on specialized datasets. While challenges like limited data hinder development for low-resource languages like Bangla, methods like fine-tuning and few-shot learning help LLMs perform well. Ethical considerations are vital to ensure generated content, especially in mental health, is safe, reliable, and culturally sensitive.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Tackling Hallucination in Bengali NLP: Enhancing Paraphrase Generation, Reading Comprehension, and Formal Application Writing Using LLMs with Few-Shot Learning, Fine-Tuning, and RAG
</span>. Saidur Rahman Sujon, Ahmadul Karim Chowdhury, Fatema Tuj Johora Faria, Mukaffi Bin Moin and Faisal Muhammad Shah <span style="color:green;"><em> Submitted to an A* Rank Conference</em></span>.</span>  

### Ongoing Work:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">Leveraging LLMs for Mental Health Advice Generation in Low-Resource Bangla Language</span>.</span>

## 6. Image-to-Text Generation

<p style="text-align:justify; color:black; font-family:Georgia"> 
Image-to-text generation in agriculture, particularly for disease diagnosis and recommendations, is a growing field with great potential. Large vision models like LLaMA 1.5, InstructBLIP, GPT-4, and Fuyu can analyze and interpret visual features in plant images, such as color changes, texture, and shapes, to accurately diagnose plant diseases. These models generate detailed textual descriptions, explaining the disease, its symptoms, and suggesting treatments. Key applications include identifying plant diseases through visual symptoms like discoloration or wilting, helping farmers and agronomists make informed decisions for effective disease management.
</p>  

### Ongoing Work:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">Image-to-Text Generation for Agricultural Disease Diagnosis and Recommendations</span>.</span>


## 7. Natural Language Processing for Medical Question Answering

<p style="text-align:justify; color:black; font-family:Georgia">
Developing a question-answering (QA) system in low-resource languages like Bangla, particularly in the medical field, presents challenges due to limited datasets and pre-trained models. The system must process medical literature, clinical notes, and patient records to respond accurately to queries, despite the scarcity of Bangla medical resources. It also needs to handle complex medical terminology and English code-switching. Such a system could support healthcare professionals in making informed decisions, especially in rural areas, and improve patient education by answering medical questions in Bangla. Addressing various question types (factoid, list, confirmation, etc.), it must overcome data scarcity through methods like crowdsourcing and domain expert involvement to build annotated medical datasets in Bangla.
</p>  

### Ongoing Work:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00">BanglaMedQA: A Comprehensive Benchmark Dataset for Medical Question Answering</span>.</span>

## 8. Machine Translation and Regional Dialect Detection

<p style="text-align:justify; color:black; font-family:Georgia"> 
Machine Translation (MT) in natural language processing (NLP) helps automatically translate text between languages, with Transformer models improving translation speed and accuracy. However, for low-resource languages, including dialects spoken by marginalized communities, there are challenges due to limited linguistic resources like annotated datasets. In Bangladesh, regional Bangla dialects such as those from Sylhet, Noakhali, and Mymensingh differ significantly from Standard Bangla, creating challenges for Dialect Machine Translation (DMT). These dialects have unique expressions that may not easily translate, and the lack of dialect-specific datasets further complicates model development. Similarly, Dialect Text Classification organizes text by dialect, enabling applications like regional content targeting, public sentiment analysis, and social media insights. Both tasks require careful handling of dialect variability and cultural nuances for effective translation and classification.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Ahmed Al Wase, Mehidi Ahmmed, Md Rabius Sani, and Tashreef Muhammad. <span style="color:green;"><em> Under Review in Neural Computing and Applications </em></span>. [[PDF]](https://arxiv.org/pdf/2311.11142)</span>  


## 9. Generative Adversarial Networks in Agriculture

<p style="text-align:justify; color:black; font-family:Georgia">
Generative Adversarial Networks (GANs) have transformed machine learning, particularly in agriculture, by enabling synthetic data generation to improve disease detection, such as for potato crops. Gathering images of infected potatoes at various stages is often difficult, but GANs create realistic, diverse images that enhance training datasets, improving models' ability to generalize and diagnose diseases accurately. This innovation helps researchers and farmers develop more effective diagnostic tools. Additionally, explainable AI builds trust by offering transparency in disease classification, fostering confidence among agricultural professionals. Instance segmentation further aids potato disease detection by identifying infected areas at the pixel level, enabling precise analysis of diseases like Black Scurf, Common Scab, Dry Rot, and Pink Rot. This technique helps differentiate between healthy and diseased tissues, assess disease severity, and track its progression, allowing for timely interventions and better crop management.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification</span>. Mohammad Shafiul Alam<b>*</b>, Fatema Tuj Johora Faria<b>*</b>, Mukaffi Bin Moin<b>*</b>, Ahmed Al Wase, Md. Rabius Sani and Khan Md Hasib. <span style="color:green;"><em> Under Review in Journal of Intelligent Information Systems </em></span>. [[PDF]](https://arxiv.org/pdf/2405.07332)</span>   


## 10. Computer Vision Applications in Agriculture

<p style="text-align:justify; color:black; font-family:Georgia">
Disease classification is essential for sustainable farming and food security, as crop diseases can cause financial losses and disrupt food supply chains. Timely detection helps manage outbreaks and ensure healthy yields. Potatoes, a key staple, are prone to diseases like Black Scurf and Common Scab. Machine learning, particularly convolutional neural networks (CNNs), effectively detect such diseases by analyzing spatial patterns in images. Hybrid models that combine CNNs with LSTM, GRU, and Bi-LSTM architectures enhance predictions by capturing both spatial features and the progression of symptoms over time, enabling more robust and comprehensive disease detection.
</p>  

### Related Paper:
+ <span style="font-family:Trebuchet MS; color:black;"><span style="color:#6E2C00"> Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework</span>. Fatema Tuj Johora Faria, Mukaffi Bin Moin, Ahmed Al Wase, Md Rabius Sani, Khan Md Hasib, and Mohammad Shafiul Alam. <span style="color:green;"><em> 2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)</em></span>. [[Paper]](https://ieeexplore.ieee.org/document/10099162)</span>  