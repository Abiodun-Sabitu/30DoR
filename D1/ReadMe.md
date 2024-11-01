## Day 1 - Basic React App Setup with CDN

### Learning Points

1. **Setting Up a React SPA**  
   Initialized a simple Single Page Application (SPA) with React using CDN links for a quick setup without local installations.

2. **Using JSX and CSS**  
   Learned to write JSX (JavaScript XML) for a cleaner, HTML-like syntax within JavaScript files. Babel is used as a transpiler to convert JSX into plain JavaScript that browsers can understand.

3. **Babel Transpiler**  
   Added Babel as a CDN to enable JSX transpilation directly in the browser, which simplifies the development process for a quick setup.

4. **React and ReactDOM CDN**  
   Included CDN links for **React** and **ReactDOM**. I discovered that React provides the core functionality for building components, while ReactDOM handles rendering these components to the actual DOM in the browser.

5. **Root Div for Rendering**  
   Created a root `<div id="root">` in the HTML file as the main container where React will render all components.

6. **React 18's `createRoot` vs. React 16's `render` Method**  
   In React 18, I used `ReactDOM.createRoot` instead of `ReactDOM.render`, which was used in React 16. The `createRoot` method introduces support for concurrent rendering, allowing React to manage updates more efficiently and improve performance. This marks a significant update in React 18's rendering process, making apps smoother and more responsive.
