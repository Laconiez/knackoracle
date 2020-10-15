import React, { useEffect } from 'react';

import { db } from 'utils/firebase';

const Main = () => {
  useEffect(() => {
    db.collection('testit')
      .get()
      .then((d: any) => {
        const t: any = [];
        d.forEach((doc: any) => t.push(doc.data()));

        console.log(t);
      });
  }, []);

  return <div>KnackOracle</div>;
};

export default Main;
