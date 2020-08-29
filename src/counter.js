import React from 'react';
import styles from './main.css';
import styled from '@emotion/styled';
import { css } from 'emotion';

const CustomPar = styled('p')`
  color: ${props => (props.wild ? 'hotpink' : 'gold')}
`

const red = '#f00';
const counterClass = css`
  color: ${red};
  font-size: 2rem;
`

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  climb() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const isWild = this.state.count % 2 == 0;
    return (
      <div className={styles.counter} onClick={this.climb.bind(this)}>
        <CustomPar wild={isWild}>Count: {this.state.count}</CustomPar>
      </div>
    )
  }
}
