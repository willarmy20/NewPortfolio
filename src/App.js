import './App.css';
import GlobalStyle from './globalStyles';
import '../node_modules/normalize.css'
import { Routes, Route} from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import {lightTheme} from './componenets/Themes'
import Main from './componenets/Main';
import AboutPage from './componenets/AboutPage';
import BlogPage from './componenets/BlogPage';
import MySkillsPage from './componenets/MySkillsPage';
import WorkPage from './componenets/WorkPage';

function App() {
  return (
    <>
    <ThemeProvider theme={lightTheme}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="myskills" element={<MySkillsPage />} />
      <Route path="work" element={<WorkPage />} />
    </Routes>
    </ThemeProvider>
    <GlobalStyle />
    </>
  );
}

export default App;
