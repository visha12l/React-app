import React from 'react';
import Header from '../components/header.js';
import CollapseComponent from '../collapseApp/collapse.js';

export default class Index extends React.Component {
    render() {
      return (
          <div>
              <Header headerText="Collapse APP" />
              <div className='ChildElement'>
                  <CollapseComponent />
              </div>
          </div>
      );
    }
  }
