/**
 *
 * *GraphQL data function
 * @param {T = unknown} data
 */

// gqlData return types
interface GqlDataTypes {
  variables: { data: any };
}

export const gqlData = <T = any>(data: T): GqlDataTypes => ({
  variables: { data },
});

/**
 *
 * *GraphQL object function
 * @param {T = unknown} object
 */

// gqlObject return types
interface GqlObjectTypes {
  variables: { object: any };
}

export const gqlObject = <T = any>(object: T): GqlObjectTypes => ({
  variables: { object },
});
interface GqlObjectsTypes {
  variables: { objects: any };
}

export const gqlObjects = <T = any>(objects: T): GqlObjectsTypes => ({
  variables: { objects },
});

/**
 *
 * *GraphQL set data function
 * @param {TId = any} id
 * @param {TData = any} data
 */

// gqlSet return types
interface GqlSetTypes {
  variables: { id: any; data: any };
}

export const gqlSet = <TData = any, TId = number>(
  id: TId,
  data: TData
): GqlSetTypes => ({
  variables: { id, data },
});

/**
 *
 * *GraphQL variables function
 * @param {T = any} variables
 */

// gqlVar return types
interface GqlVarTypes {
  variables: any;
}

export const gqlVar = <T = any>(variables: T): GqlVarTypes => ({
  variables,
});

interface GqlVarGenTypes<T> {
  variables: T;
}

export const gqlVarGen = <T>(variables: T): GqlVarGenTypes<T> => ({
  variables,
});
