import React, { useState } from 'react'; 
import './App.css'; 
import axios from 'axios'; 
import { useMediaQuery } from "react-responsive";



// Error Boundary Component 
class ErrorBoundary extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { hasError: false }; 
  } 
  
  static getDerivedStateFromError(error) { 
    return { hasError: true }; 
  } 
  
  componentDidCatch(error, errorInfo) { 
    console.error("Error caught by boundary:", error, errorInfo); 
  } 
  
  render() { 
    if (this.state.hasError) { 
      return <h1>Something went wrong.</h1>; } 
      return this.props.children; 
    } 
  } 
  
  // Main App Component
    function App() { 
      const [question, setQuestion] = useState(""); 
      const [answer, setAnswer] = useState(""); 

      const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); 
      
      
      
      async function generateAnswer() { 
        setAnswer("Loading..."); 
        try { 
          const response = await axios.post( 
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBsFKZuhyFga4ilm8ddNHu-LHS0_cq6g54", 
            { 
              contents: [ 
                { 
                  parts: [{ text: question }] 
                } 
              ] 
            } 
          ); 
          
          
          setAnswer(response.data.candidates[0].content.parts[0].text); 
        } catch (error) { 
          console.error("Error fetching answer:", error); 
          setAnswer("Failed to generate answer. Try again."); 
        } 
      } 
      
      
      async function removeAnswer() {
  setAnswer(""); // Clears the answer
  setQuestion(""); // Clears the textarea input
}

         
        return ( 
        <> 
        <h1>💬ChatMate</h1> 
        <textarea 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        cols="50" 
        rows="10" 
        placeholder='Ask Anything...' 
        ></textarea> 
        <br /> 
        <button onClick={generateAnswer}style={{ marginLeft: "50px", backgroundColor: "red", color: "white" }}>Generate Answer</button> 
        <button onClick={removeAnswer} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>Delete Answer</button> 
        
        <div
  style={{
    width: '100%',
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '24px',
    marginTop: '15px',
    borderRadius: '10px',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.8,
    letterSpacing: '0.5px',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    backgroundColor: '#linear-gradient(to right, #ff6a00, #ee0979)',
    color: '#f0f0f0',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
  }}
>
  {answer}
</div>

        </> 
        ); 
        } 
        
        
        // Wrap App in ErrorBoundary 
        export default function WrappedApp() { 
          return ( 
          <ErrorBoundary> 
            <App /> 
            </ErrorBoundary> 
            ); 
          }