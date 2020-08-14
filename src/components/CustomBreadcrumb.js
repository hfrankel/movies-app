import React, { useContext } from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import MovieContext from './../contexts/MovieContext';
import './../assets/styles/componentStyles/CustomBreadcrumb.css';

const CustomBreadcrumb = () => {
  const { handleCrumbLink, active } = useContext(MovieContext);

  return (
    <>
      <div className="custombreadcrumb-container">
        <Breadcrumb id="custombreadcrumb-crumb">
          <Breadcrumb.Section
            active={active}
            onClick={(e) => handleCrumbLink(e)}
          >
            Trending
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section
            link
            active={!active}
            onClick={(e) => handleCrumbLink(e)}
          >
            Results
          </Breadcrumb.Section>
        </Breadcrumb>
      </div>
    </>
  );
};

export default CustomBreadcrumb;
