# Online Compiler Project

This is a basic web-based  compiler built using HTML, CSS, JavaScript, and Node.js. The project supports compiling and running code written in C++, Java, and Python. 

## Features

- Code editor with syntax highlighting and bracket matching (powered by CodeMirror).
- Supports multiple programming languages: C++, Java, and Python.
- Takes user input and displays output for the provided code.
- Backend server to compile and run code using `compilex` library.

## Technologies Used

- Frontend: HTML, CSS, Bootstrap, JavaScript, CodeMirror
- Backend: Node.js, Express, compilex
- Other: body-parser, path

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/online-compiler.git
   cd online-compiler
<br>  
   
 2.Install the dependencies:
    
    npm install express body-parser compilex
<br>  
    
 3.Download and include CodeMirror library in the project:<br>  
      Place the codemirror-5.65.9 directory in the root folder of your project. You can download it from the CodeMirror website.<br>  

## Running the Application

- Open your terminal and Start the Node.js server: nodemon Api.js
- Open your browser and navigate to: http://localhost:9090
 
## Project Structure
 - index.html: The main HTML file for the frontend.
 - app.js: The main server file using Express.
 - codemirror-5.65.9: Directory containing CodeMirror library files.

## Usage
 1 Open the application in your browser. <br>  
 2 Select a programming language from the dropdown menu.<br>
 3 Write your code in the code editor.<br>
 4 Provide input if required in the input textarea.<br>
 5 Click the run button to compile and run the code.<br>
 6 View the output in the output textarea.<br>

## Contributions-
 Contributions are welcome! If you have suggestions for improving the functioning, features and working  please follow these guidelines:<br>

-Fork the repository.<br>
-Create a new branch (git checkout -b feature/improvement).<br>
-Make your changes.<br>
-Commit your changes (git commit -am 'Add feature/improvement').<br>
-Push to the branch (git push origin feature/improvement).<br>
-Create a new Pull Request.<br>
