import React from 'react';

import './<%= projectName %>.css';

interface <%= projectName %>Props {
  children: React.ReactNode;
}

const <%= projectName %>: React.FunctionComponent<<%= projectName %>Props> = ({
  children,
}: <%= projectName %>Props) => (
  <div>{children}</div>
);

export default <%= projectName %>;
