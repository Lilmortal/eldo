import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './<%= projectName %>.css';

const bem = createBem('eldo-<%= projectName %>');

interface <%= projectName %>Props {
  className?: string;
  children: React.ReactNode;
}

const <%= projectName %>: React.FC<<%= projectName %>Props> = ({
  className,
  children,
}: <%= projectName %>Props) => (
  <div className={combinedClassNames(bem(), className)}>{children}</div>
);

export default <%= projectName %>;
