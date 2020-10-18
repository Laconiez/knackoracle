import React from 'react';

import StarRater from 'components/StarRater';
import { Button } from 'components/Buttons/Buttons';
import { Input } from 'components/Inputs/Input.styles';

import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

import BackIcon from 'assets/icons/ic_back-arrow.svg';

import { H3 } from 'components/Headings/Headings';

const Interview = () => {
  return (
    <Layout>
      <Sidebar>
        <H3 className="header">Questions</H3>

        <ol className="questionsList">
          <li className="question">s</li> <li className="question">s</li>
          <li className="question">s sdfsdf sdf dsfsdf sdf sdf sd sf sd sdfsdfsdf sd f</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
          <li className="question">s</li>
        </ol>
      </Sidebar>
      <section className="main">
        <header className="header">
          <img src={BackIcon} alt="back" />
          <H3>Maria Pisarenko</H3>
        </header>
        <div className="subheader">
          <h5 className="title">Date:</h5>
          <p className="text">10/16/2020</p>
          <h5 className="title">Company:</h5>
          <p className="text">10/16/2020</p>
          <h5 className="title">Job:</h5>
          <p className="text">10/16/2020</p>
        </div>

        <section className="content">
          <article className="questionContent">
            What two keys can’t open any door? Cray cred keytar retro butcher disrupt fixie pork belly food truck forage
            drinking vinegar man bun 8-bit. Marfa shoreditch +1, edison bulb raclette tofu cornhole brunch mixtape.
            Actually cray jean shorts brooklyn adaptogen neutra.{' '}
          </article>

          <article className="answer">
            Monkey and donkey. Cray cred keytar retro butcher disrupt fixie pork belly food truck forage drinking
            vinegar man bun 8-bit. Marfa shoreditch +1, edison bulb raclette tofu cornhole brunch mixtape.
          </article>

          <div className="actions">
            <H3>Candidate assessment</H3> <StarRater /> <Button>NEXT QUESTION</Button>
            <Input placeholder="Comment" />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Interview;
