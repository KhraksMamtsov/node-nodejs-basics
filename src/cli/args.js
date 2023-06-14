const parseArgs = () => {
  // Write your code here
  const [_execPath, _jsFile, ...args] = process.argv;
  const KEY_PREFIX = "--";

  const { result: parsedArgv } = args.reduce(
    (acc, currentElement) => {
      const { key, result } = acc;

      if (currentElement.startsWith(KEY_PREFIX)) {
        const newKey = currentElement.slice(KEY_PREFIX.length);
        result[newKey] = [];

        return {
          key: newKey,
          result,
        };
      } else {
        result[key] = [...result[key], currentElement];

        return {
          key: undefined,
          result,
        };
      }
    },
    {
      key: undefined,
      result: {},
    }
  );

  const result = Object.entries(parsedArgv)
    .map(([key, values]) => `${key} is ${values.join(",")}`)
    .join(", ");
  console.log(result);

  return result;
};

parseArgs();
