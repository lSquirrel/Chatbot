import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './app/Home';
import { useEffect, useState } from 'react';

function App() {
  // 获取窗口尺寸
  const getWindowSize = () => {
    const width = window.innerWidth || 1200;
    return {
      width,
      height: window.innerHeight,
      isMobile: width < 769 ? true : false
    }
  }
  
  const [props, setProps] = useState(getWindowSize());
  
  const handleResize = () => {
    setProps({
      ...props,
      ...getWindowSize()
    })
  }
  useEffect(() => {
    // 监听窗口变化
    window.addEventListener('resize', handleResize);
    // 卸载时销毁监听
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home {...props} />} />
      </Routes>
    </div>
  )
}

export default App
