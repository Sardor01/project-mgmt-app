/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation AddClient($name: String!, $email: String!, $phone: String!) {\n    addClient(name: $name, email: $email, phone: $phone) {\n      id\n      name\n    }\n  }\n':
    types.AddClientDocument,
  '\n  mutation AddProject($name: String!, $description: String!, $clientId: ID!, $status: ProjectStatus) {\n    addProject(name: $name, description: $description, clientId: $clientId, status: $status) {\n      id\n      name\n    }\n  }\n':
    types.AddProjectDocument,
  '\n  mutation DeleteClient($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      name\n    }\n  }\n':
    types.DeleteClientDocument,
  '\n  mutation DeleteProject($id: ID!) {\n    deleteProject(id: $id) {\n      id\n      name\n    }\n  }\n':
    types.DeleteProjectDocument,
  '\n  mutation UpdateProject($id: ID!, $name: String, $description: String, $status: ProjectStatusUpdate) {\n    updateProject(id: $id, name: $name, description: $description, status: $status) {\n      id\n      name\n    }\n  }\n':
    types.UpdateProjectDocument,
  '\n  query GetClients {\n    clients {\n      id\n      name\n    }\n  }\n': types.GetClientsDocument,
  '\n  query GetHome {\n    clients {\n      id\n      name\n      email\n      phone\n    }\n    projects {\n      id\n      name\n      description\n      status\n    }\n  }\n':
    types.GetHomeDocument,
  '\n  query GetProject($id: ID!) {\n    project(id: $id) {\n      name\n      description\n      status\n      client {\n        id\n      }\n    }\n  }\n':
    types.GetProjectDocument,
  '\n  subscription Greetings {\n    greetings\n  }\n': types.GreetingsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddClient($name: String!, $email: String!, $phone: String!) {\n    addClient(name: $name, email: $email, phone: $phone) {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  mutation AddClient($name: String!, $email: String!, $phone: String!) {\n    addClient(name: $name, email: $email, phone: $phone) {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddProject($name: String!, $description: String!, $clientId: ID!, $status: ProjectStatus) {\n    addProject(name: $name, description: $description, clientId: $clientId, status: $status) {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  mutation AddProject($name: String!, $description: String!, $clientId: ID!, $status: ProjectStatus) {\n    addProject(name: $name, description: $description, clientId: $clientId, status: $status) {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteClient($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteClient($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteProject($id: ID!) {\n    deleteProject(id: $id) {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteProject($id: ID!) {\n    deleteProject(id: $id) {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateProject($id: ID!, $name: String, $description: String, $status: ProjectStatusUpdate) {\n    updateProject(id: $id, name: $name, description: $description, status: $status) {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateProject($id: ID!, $name: String, $description: String, $status: ProjectStatusUpdate) {\n    updateProject(id: $id, name: $name, description: $description, status: $status) {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetClients {\n    clients {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  query GetClients {\n    clients {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetHome {\n    clients {\n      id\n      name\n      email\n      phone\n    }\n    projects {\n      id\n      name\n      description\n      status\n    }\n  }\n',
): (typeof documents)['\n  query GetHome {\n    clients {\n      id\n      name\n      email\n      phone\n    }\n    projects {\n      id\n      name\n      description\n      status\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetProject($id: ID!) {\n    project(id: $id) {\n      name\n      description\n      status\n      client {\n        id\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetProject($id: ID!) {\n    project(id: $id) {\n      name\n      description\n      status\n      client {\n        id\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  subscription Greetings {\n    greetings\n  }\n',
): (typeof documents)['\n  subscription Greetings {\n    greetings\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never
