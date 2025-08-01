<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mukaffi Bin Moin - Software Engineer specializing in AI/ML, Computer Vision, and Multimodal AI">
    <meta name="keywords" content="AI, Machine Learning, Computer Vision, Multimodal AI, Software Engineer">
    <meta name="author" content="Mukaffi Bin Moin">
    <title>Mukaffi Bin Moin - AI/ML Software Engineer</title>
    
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@300;400&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --success-color: #27ae60;
            --text-color: #2c3e50;
            --light-bg: #f8f9fa;
            --border-color: #e9ecef;
            --shadow: 0 2px 10px rgba(0,0,0,0.1);
            --border-radius: 8px;
            --transition: all 0.3s ease;
            --timeline-blue: #3498db;
            --timeline-green: #27ae60;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            line-height: 1.7;
            color: var(--text-color);
            background-color: #ffffff;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header Section */
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 0;
            background: linear-gradient(135deg, var(--light-bg) 0%, #ffffff 100%);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .greeting {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 20px;
            font-weight: bold;
        }

        .subtitle {
            font-size: 1.2rem;
            color: var(--secondary-color);
            margin-bottom: 10px;
        }

        /* Main Content */
        .main-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }

        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
        }

        .content-section {
            background: #ffffff;
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            margin-bottom: 30px;
        }

        /* About Section */
        .about-text {
            text-align: justify;
            margin-bottom: 20px;
            font-size: 1.1rem;
        }

        .research-interests {
            background: var(--light-bg);
            padding: 20px;
            border-radius: var(--border-radius);
            border-left: 4px solid var(--secondary-color);
            margin: 20px 0;
        }

        .research-interests h3 {
            color: var(--primary-color);
            margin-bottom: 10px;
        }

        .interests-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .interest-tag {
            background: var(--secondary-color);
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            transition: var(--transition);
        }

        .interest-tag:hover {
            background: var(--primary-color);
            transform: translateY(-2px);
        }

        /* Contact Section */
        .contact-section {
            background: var(--light-bg);
            padding: 25px;
            border-radius: var(--border-radius);
            text-align: center;
        }

        .contact-section h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .email-list {
            list-style: none;
            margin-bottom: 20px;
        }

        .email-list li {
            margin: 10px 0;
            padding: 10px;
            background: white;
            border-radius: var(--border-radius);
            transition: var(--transition);
        }

        .email-list li:hover {
            transform: translateX(5px);
            box-shadow: var(--shadow);
        }

        .email-link {
            color: var(--secondary-color);
            text-decoration: none;
            font-weight: 500;
        }

        .email-link:hover {
            color: var(--primary-color);
        }

        /* Modern Timeline News Section */
        .news-section {
            grid-column: 1 / -1;
            background: #ffffff;
            padding: 40px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            margin-bottom: 30px;
        }

        .news-section h2 {
            color: var(--primary-color);
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 2rem;
            text-align: center;
        }

        /* Timeline Styles */
        .timeline {
            position: relative;
            padding: 20px 0;
            max-width: 800px;
            margin: 0 auto;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(to bottom, var(--timeline-blue), var(--timeline-green));
            transform: translateX(-50%);
            border-radius: 2px;
        }

        .timeline-item {
            display: flex;
            justify-content: flex-end;
            padding: 15px 0;
            position: relative;
            width: 50%;
            margin-bottom: 20px;
        }

        .timeline-item:nth-child(even) {
            align-self: flex-end;
            justify-content: flex-start;
            padding-left: 40px;
            margin-left: 50%;
        }

        .timeline-item:nth-child(odd) {
            padding-right: 40px;
        }

        .timeline-content {
            background: var(--light-bg);
            padding: 20px;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            max-width: 350px;
            position: relative;
            transition: var(--transition);
            font-family: 'Inter', sans-serif;
        }

        .timeline-content:hover {
            border-color: var(--secondary-color);
            transform: translateY(-3px);
            box-shadow: var(--shadow);
        }

        .timeline-date {
            color: var(--accent-color);
            font-family: 'Fira Code', monospace;
            font-weight: 600;
            font-size: 0.85rem;
            margin-bottom: 8px;
            text-transform: uppercase;
        }

        .timeline-desc {
            color: var(--text-color);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .timeline-desc a {
            color: var(--secondary-color);
            text-decoration: none;
            font-weight: 500;
        }

        .timeline-desc a:hover {
            color: var(--primary-color);
            text-decoration: underline;
        }

        /* Timeline dots */
        .timeline-content::before {
            content: '';
            position: absolute;
            top: 20px;
            width: 16px;
            height: 16px;
            background: var(--secondary-color);
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 3px var(--secondary-color);
        }

        .timeline-item:nth-child(odd) .timeline-content::before {
            right: -48px;
        }

        .timeline-item:nth-child(even) .timeline-content::before {
            left: -48px;
        }

        /* Year separators */
        .timeline-year {
            width: 100%;
            text-align: center;
            margin: 30px 0 20px 0;
            position: relative;
        }

        .timeline-year h3 {
            display: inline-block;
            background: white;
            padding: 10px 20px;
            color: var(--primary-color);
            font-size: 1.3rem;
            border: 2px solid var(--secondary-color);
            border-radius: 25px;
            font-weight: 600;
        }

        /* Mobile responsiveness for timeline */
        @media (max-width: 768px) {
            .timeline::before {
                left: 20px;
            }

            .timeline-item {
                width: 100%;
                padding-left: 50px !important;
                padding-right: 20px !important;
                margin-left: 0 !important;
                justify-content: flex-start !important;
            }

            .timeline-item:nth-child(even) .timeline-content::before,
            .timeline-item:nth-child(odd) .timeline-content::before {
                left: -48px;
            }

            .timeline-content {
                max-width: 100%;
            }
        }

        /* Collaboration Notice */
        .collaboration-notice {
            background: linear-gradient(135deg, var(--success-color), #2ecc71);
            color: white;
            padding: 20px;
            border-radius: var(--border-radius);
            text-align: center;
            margin: 20px 0;
            font-style: italic;
        }

        /* Globe Section */
        .globe-section {
            text-align: center;
            padding: 40px 0;
            background: var(--light-bg);
            border-radius: var(--border-radius);
            margin: 40px 0;
        }

        .globe-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 300px;
        }

        #globe-container {
            width: 300px;
            height: 300px;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .content-section, .news-section {
            animation: fadeInUp 0.6s ease-out;
        }

        /* Accessibility improvements */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
        }

        .skip-link:focus {
            top: 6px;
        }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <div class="container">
        <header class="header">
            <h1 class="greeting">Greetings!</h1>
            <p class="subtitle">AI/ML Software Engineer & Researcher</p>
        </header>

        <main id="main-content" class="main-content">
            <div>
                <section class="content-section" aria-labelledby="about-heading">
                    <h2 id="about-heading" style="display: none;">About Me</h2>
                    <p class="about-text">
                        I am <strong>Mukaffi Bin Moin</strong>, currently working as a Software Engineer I (AI/ML) at 
                        <a href="https://www.linkedin.com/company/brainstation-23/" target="_blank" rel="noopener" aria-label="Brain Station 23 company page">Brain Station 23</a>. 
                        I obtained my Bachelor's degree in Computer Science and Engineering from the 
                        <a href="https://aust.edu/" target="_blank" rel="noopener" aria-label="Ahsanullah University website">Ahsanullah University of Science and Technology</a>.
                    </p>

                    <div class="research-interests">
                        <h3>Research Interests</h3>
                        <p>My research focuses on cutting-edge areas of artificial intelligence:</p>
                        <div class="interests-list">
                            <span class="interest-tag">Computer Vision</span>
                            <span class="interest-tag">Vision-Language Models</span>
                            <span class="interest-tag">Multimodal AI</span>
                            <span class="interest-tag">Trustworthy AI</span>
                            <span class="interest-tag">Multimodal Agents</span>
                            <span class="interest-tag">AI For Healthcare</span>
                        </div>
                    </div>

                    <div class="collaboration-notice">
                        <i class="fas fa-handshake"></i>
                        Please contact me via email if you have any questions or are interested in collaborating.
                    </div>
                </section>
            </div>

            <aside>
                <section class="contact-section" aria-labelledby="contact-heading">
                    <h2 id="contact-heading">
                        <i class="fas fa-envelope" aria-hidden="true"></i>
                        Contact
                    </h2>
                    <ul class="email-list">
                        <li>
                            <a href="mailto:mukaffimoin28@gmail.com" class="email-link">
                                <i class="fas fa-paper-plane" aria-hidden="true"></i>
                                mukaffimoin28@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="mailto:mukaffi28@gmail.com" class="email-link">
                                <i class="fas fa-paper-plane" aria-hidden="true"></i>
                                mukaffi28@gmail.com
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>

            <!-- Modern Timeline News Section -->
            <section class="news-section" aria-labelledby="news-heading">
                <h2 id="news-heading">
                    <i class="fas fa-bolt" aria-hidden="true"></i>
                    Recent News
                </h2>
                
                <div class="timeline">
                    <div class="timeline-year">
                        <h3>2025</h3>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[October]</div>
                            <div class="timeline-desc">One paper got published.</div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[October]</div>
                            <div class="timeline-desc">Joined as a Software Engineer I (AI/ML) at Brain Station 23 PLC.</div>
                        </div>
                    </div>

                    <div class="timeline-year">
                        <h3>2024</h3>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[October]</div>
                            <div class="timeline-desc">Attended the 18th International Conference on Information Technology and Applications and presented two papers. 
                                (<a href="https://www.icita.world/#/" target="_blank" rel="noopener">ICITA 2024</a>)
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[October]</div>
                            <div class="timeline-desc">Attended the 4th International Conference on Computing and Communication Networks presented two papers. 
                                (<a href="https://icccn.co.uk/" target="_blank" rel="noopener">ICCCNet 2024</a>)
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[September]</div>
                            <div class="timeline-desc">Attended the IEEE Region 10 Symposium at Netaji Subhas University of Technology (NSUT), New Delhi 
                                (<a href="https://ieeedelhi-tensymp2024.org/" target="_blank" rel="noopener">TENSYMP2024</a>).
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[August]</div>
                            <div class="timeline-desc">Two papers got accepted at 18th International Conference on Information Technology and Applications 
                                (<a href="https://www.icita.world/#/" target="_blank" rel="noopener">ICITA 2024</a>).
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[June]</div>
                            <div class="timeline-desc">One paper got accepted at The IEEE Region 10 Symposium 
                                (<a href="https://ieeedelhi-tensymp2024.org/" target="_blank" rel="noopener">TENSYMP2024</a>).
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[May]</div>
                            <div class="timeline-desc">Two papers got accepted at 4th International Conference on Computing and Communication Networks 
                                (<a href="https://icccn.co.uk/" target="_blank" rel="noopener">ICCCNet 2024</a>).
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-date">[March]</div>
                            <div class="timeline-desc">Joined as a Machine Learning Engineer (Level-I) at 
                                <a href="https://www.linkedin.com/company/anttroboticsltd/posts/?feedView=all" target="_blank" rel="noopener">ANTT Robotics Ltd.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <section class="globe-section" aria-labelledby="visitor-map-heading">
            <h2 id="visitor-map-heading" style="display: none;">Visitor Map</h2>
            <div class="globe-container">
                <div id="globe-container">
                    <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=hmIfEwbtPyT4fAgf0EIp_Xo1LUscuzQCoj1FtxsKDcI"></script>
                </div>
            </div>
        </section>
    </div>
</body>
</html>