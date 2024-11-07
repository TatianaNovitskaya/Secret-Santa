// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  listInvites: [
    {
      __typename: 'ListInvites' as const,
      id: 42,
    },
    {
      __typename: 'ListInvites' as const,
      id: 43,
    },
    {
      __typename: 'ListInvites' as const,
      id: 44,
    },
  ],
})
