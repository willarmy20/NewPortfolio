import './App.css';
import GlobalStyle from './globalStyles';
import '../node_modules/normalize.css'
import { Routes, Route} from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import {themes} from './componenets/Themes'
import Main from './componenets/Main';
import AboutPage from './componenets/AboutPage';
import BlogPage from './componenets/BlogPage';
import MySkillPage from './componenets/MySkillPage';
import ProjectPage from './componenets/ProjectPage';

function App() {
  return (
    <>
    <ThemeProvider theme={themes.lightTheme}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="skills" element={<MySkillPage />} />
      <Route path="project" element={<ProjectPage />} />
    </Routes>
    </ThemeProvider>
    <GlobalStyle />
    </>
  );
}

export default App;
