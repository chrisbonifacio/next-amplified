/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
      id
      firstName
      lastName
      email
      plan
      mainHelper
      avatar
      firstGame
      lastStepTime
      histories {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
      id
      firstName
      lastName
      email
      plan
      mainHelper
      avatar
      firstGame
      lastStepTime
      histories {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
      id
      firstName
      lastName
      email
      plan
      mainHelper
      avatar
      firstGame
      lastStepTime
      histories {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($owner: String) {
    onCreateHistory(owner: $owner) {
      id
      ownerProfId
      profileID
      profile {
        id
        firstName
        lastName
        email
        plan
        mainHelper
        avatar
        firstGame
        lastStepTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      count
      plan
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($owner: String) {
    onUpdateHistory(owner: $owner) {
      id
      ownerProfId
      profileID
      profile {
        id
        firstName
        lastName
        email
        plan
        mainHelper
        avatar
        firstGame
        lastStepTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      count
      plan
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($owner: String) {
    onDeleteHistory(owner: $owner) {
      id
      ownerProfId
      profileID
      profile {
        id
        firstName
        lastName
        email
        plan
        mainHelper
        avatar
        firstGame
        lastStepTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      count
      plan
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      tenant
      title
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      tenant
      title
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      tenant
      title
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      createdAt
      updatedAt
      type
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      createdAt
      updatedAt
      type
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      createdAt
      updatedAt
      type
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
