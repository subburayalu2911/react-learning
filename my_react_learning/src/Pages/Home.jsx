import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

function Home() {
  const [topics, setTopics] = useState([
    "Components",
    "Props and State",
    "Hooks",
    "Routing"
  ]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => setDraggedIndex(index);
 
  const handleDrop = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const updatedTopics = [...topics];
    const [removed] = updatedTopics.splice(draggedIndex, 1);
    updatedTopics.splice(index, 0, removed);
    setTopics(updatedTopics);
    setDraggedIndex(null);
  };

  return (
    <div className="w-100 min-vh-100 bg-white">
      <div className="shadow-sm p-4">
        <h2 className="text mb-3 fw-bold">Welcome to My React Learning Journey</h2>
        <p>
          Learning React is an exciting adventure! React helps you build dynamic,
          interactive, and modern user interfaces with ease. By mastering
          components, props, state, and hooks, you’ll be able to create scalable
          and maintainable applications.
        </p>
        <hr />
        <p>
          This project is a step-by-step guide to learning React concepts. Here’s what I have
          learned so far, including the basics of components, state management,
          and routing.
        </p>
        <h3 className="mt-4 fw-bold">Get Started</h3>
        <p>
          Navigate through the YouTube channel to explore different topics
          related to React. Each page covers a specific concept, providing you with
          a solid foundation in React development.
        </p>
        <div className="mt-2 text-muted" style={{ fontSize: "0.95em" }}>
                  <strong>Tip:</strong> You can drag and drop these topics to reorder them. <br />
                  <strong>Components</strong> are the building blocks of React applications. They let you split the UI into independent, reusable pieces, and think about each piece in isolation.
        </div>
        <ul className="list-group mb-4">
          {topics.map((topic, idx) => (
            <li
              key={topic}
              className="list-group-item"
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleDrop(idx)}
              style={{ cursor: "grab" }}
            >
              {topic}
              {topic === "Components" && (
                ''
              )}
            </li>
          ))}
        </ul>
        <hr />
        <h3 className="mt-4 fw-bold">Happy Learning!</h3>
        <p>
          Explore the code in the <code>src</code> directory to see how each component is
          structured and how they interact with each other.
        </p>
        <p>
          This project is a great starting point for anyone looking to learn
          React. Dive in, experiment, and have fun coding!
        </p>
        <footer className="mt-4 border-top pt-3 text-muted">
          <p>
            Feel free to reach out via the Contact page if you have any questions or
            feedback!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
