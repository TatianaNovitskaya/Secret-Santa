export const schema = gql`
  type Event {
    id: String!
    name: String!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    sendReminder: Boolean!
    invite: [Invite]!
    pairings: [Pairing]!
    wishList: [WishList]!
    thankYou: [ThankYou]!
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: String!): Event @requireAuth
  }

  input CreateEventInput {
    name: String!
    date: DateTime!
    sendReminder: Boolean!
  }

  input UpdateEventInput {
    name: String
    date: DateTime
    sendReminder: Boolean
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @skipAuth
    updateEvent(id: String!, input: UpdateEventInput!): Event! @skipAuth
    deleteEvent(id: String!): Event! @skipAuth
  }
`
