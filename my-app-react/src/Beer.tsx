import * as React from 'react';

interface Props {
  name: string;
}

const Beer: React.FunctionComponent<Props> = (props) => {
  return <li>{props.name}</li>;
};

export default Beer;

