import React, { useState, useEffect } from 'react';
import './../assets/styles/componentStyles/TwoColTable.css';

const TwoColTable = ({ info }) => {
  const [myInfo, setMyInfo] = useState([]);
  const [alt, setAlt] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setMyInfo([
      ['Title', info.title],
      ['Tagline', info.tagline],
      ['Overview', info.overview],
      ['Release', info.release_date],
      ['Budget', info.budget],
      ['Run-Time', info.runtime],
    ]);
    setAlt(info);
  }, [info]);

  console.log(myInfo);

  const renderInfo = myInfo.map((data, index) => {
    return (
      <div key={index} className="two-col-table-container">
        <div className="two-col-table-key">{data[0]}</div>
        <div className="two-col-table-value">{data[1]}</div>
      </div>
    );
  });

  return (
    <>
      <section>{renderInfo}</section>
    </>
  );
};

export default TwoColTable;
