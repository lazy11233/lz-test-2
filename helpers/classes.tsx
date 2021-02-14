interface Options {
  extra: string | undefined;
}

type classesToggles = {
  [key: string]: boolean;
};

const scopedClassMaker = (prefix: string) => {
  return (name?: string | classesToggles, options?: Options) => {
    const nameInObject =
      typeof name === 'string' || name === undefined
        ? name !== undefined
          ? { [name]: name }
          : { '': false }
        : name;
    const scoped = Object.entries(nameInObject)
      .filter((kv) => kv[1])
      .map((kv) => kv[0])
      .map((n) => [prefix, n].filter(Boolean).join('-'))
      .join(' ');

    if (options && options.extra)
      return [scoped, options && options.extra].filter(Boolean).join(' ');
    else if (!scoped) return prefix;
    else return scoped;
  };
};

export { scopedClassMaker };
