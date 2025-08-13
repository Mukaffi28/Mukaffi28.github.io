import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Work from './pages/Work';
import Datasets from './pages/Datasets';
import Education from './pages/Education';
import CV from './pages/CV';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 70px; // Account for fixed header
  margin-left: 400px; // Account for sidebar width
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Sidebar />
        <MainContent>
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/work" element={<Work />} />
              <Route path="/datasets" element={<Datasets />} />
              <Route path="/education" element={<Education />} />
              <Route path="/cv" element={<CV />} />
            </Routes>
          </ContentWrapper>
        </MainContent>
        <Footer variant="main" />
      </AppContainer>
    </Router>
  );
}

export default App;
