type classNamesTypes = string | undefined;

const combinedClassNames = (
  classNames: string,
  ...additionalClassNames: classNamesTypes[]
): string =>
  `${classNames}${
    additionalClassNames.length > 0
      ? additionalClassNames.reduce(
          (all, className) => (className ? `${all} ${className}` : all),
          ''
        )
      : ''
  }`;

export default combinedClassNames;
