import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './<%= projectName %>.css';

const bem = createBem('eldo-<%= projectName %>');

interface <%= projectName %>Props {
  children: React.ReactNode;
}

const <%= projectName %>: React.FC<<%= projectName %>Props> = ({
  children,
}: <%= projectName %>Props) => (
  <div>{children}</div>
);

export default <%= projectName %>;
