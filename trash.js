General Styles
body {
  font-family: "Poppins", sans-serif;
  background-color: #121212;
  color: white;
  text-align: center;
}

/* Root Container */
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

/* Heading (H1) */
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(45deg, #ff4b2b, #ff416c);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 65, 108, 0.4);
  animation: glow 2s infinite alternate;
  transition: all 0.3s ease-in-out;
}

h1:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(255, 65, 108, 0.6);
}

/* Buttons */
button {
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  background: linear-gradient(45deg, #ff4b2b, #ff416c);
  box-shadow: 0 4px 10px rgba(255, 65, 108, 0.4);
  animation: glow 2s infinite alternate;
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(255, 65, 108, 0.6);
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
}

/* Text Area */
textarea {
  width: 100%;
  height: 150px;
  font-size: 1.2rem;
  padding: 12px;
  border: 2px solid #ff416c;
  border-radius: 8px;
  background-color: #121212;
  color: white;
  resize: none;
  transition: all 0.3s ease-in-out;
}

textarea:focus {
  outline: none;
  border-color: #ff4b2b;
  box-shadow: 0 0 10px rgba(255, 65, 108, 0.6);
  animation: glow 2s infinite alternate;
}

/* Generated Answer */
pre {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(45deg, #d1db48, #ff416c);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(255, 65, 108, 0.4);
  text-align: center;
  display: block;
  width: 80%;
  margin: 20px auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  transition: all 0.3s ease-in-out;
}

pre:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 15px rgba(203, 245, 37, 0.6);
}

/* Responsive Design */
@media (max-width: 768px) {
  textarea {
    width: 100%;
    font-size: 1rem;
  }
  
  button {
    width: 100%;
    font-size: 1rem;
  }

  pre {
    font-size: 1rem;
    padding: 8px;
  }
}

/* Glow Animation */
@keyframes glow {
  0% { box-shadow: 0 0 10px #ff416c; }
  50% { box-shadow: 0 0 20px #ff4b2b; }
  100% { box-shadow: 0 0 10px #ff416c; }
}




textarea {
  width: 50%;
  min-height: 200px; /* Increased height */
  font-size: 1.2rem;
  padding: 15px;
  border: 2px solid #ff416c;
  border-radius: 8px;
  background-color: #121212;
  color: white;
  resize: vertical; /* Allows resizing only vertically */
  transition: all 0.3s ease-in-out;
}

textarea {
  min-height: 200px; /* Increased vertical height */
  min-width: 440px;
  resize: horizontal; /* Allows resizing only vertically */
}
