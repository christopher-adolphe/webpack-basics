import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import {AppContainer} from 'react-hot-loader';

const customRender = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-root')
  );
}

customRender(Counter);

if (module.hot) {
  module.hot.accept('./counter.js', () => {
    const newCounter = require('./counter.js').default;

    customRender(newCounter);
  });
}
