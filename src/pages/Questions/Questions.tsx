import React from 'react';

import { Link } from 'react-router-dom';

import questionsStore from 'stores/Questions.store';

const Questions = () => {
  const { list } = questionsStore;

  return (
    <div>
      Questions
      <ul>
        {list.map((l) => (
          <li key={l.id}>{l.content}</li>
        ))}
      </ul>
      <Link to="/questions/new">Create New Question</Link>
    </div>
  );
};

export default Questions;
