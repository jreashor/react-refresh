import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';
import Temp from './components/Temp.jsx';
import { EXAMPLES } from './data.js';

console.log('App module loaded');

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  console.log('App component rendered.');

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic]?.title}</h3>
        <p>{EXAMPLES[selectedTopic]?.description}</p>
        <pre><code>{EXAMPLES[selectedTopic]?.code}</code></pre>
      </div>
    );
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map((concept) => (
              <CoreConcept  {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelcted={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}>
                Components
            </TabButton>
            <TabButton
              isSelcted={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}>
                JSX
            </TabButton>
            <TabButton
            isSelcted={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton
            isSelcted={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}>
              State
            </TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
