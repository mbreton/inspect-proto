
import './App.css';
import { createBrowserInspector } from "@statelyai/inspect";
import { createActor, createMachine, InspectionEvent, Observer } from "xstate";

function App() {

  const feedbackMachine = createMachine({
    id: "feedback",
    initial: "question",
    context: {
      feedback: "",
    },
    states: {
      question: {
        meta: {
          question: "How was your experience?",
        },
      },
    },
  });
  const inspector = createBrowserInspector();
  const actor = createActor(feedbackMachine, {
    inspect: inspector.inspect as Observer<InspectionEvent>,
  });
  actor.start();

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
