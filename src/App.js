import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';

function App() {
  return (
    <Container className="mt-5">
      <MultipleChoiceQuiz />
    </Container>
  );
}

export default App;
