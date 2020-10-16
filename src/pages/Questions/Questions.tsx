import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import questionsStore from 'stores/Questions.store';

import Layout from 'components/Layouts/CommonLayout';

const Questions = () => {
  const { list, loadList } = questionsStore;

  useEffect(() => {
    loadList();
  }, [])

  return (
    <Layout title="Questions">
      <ul>
        {list.map((l) => (
          <li key={l.id}>{l.content}</li>
        ))}
      </ul>
      <Link to="/questions/new">Create New Question</Link>
    </Layout>
  );
};

export default Questions;
