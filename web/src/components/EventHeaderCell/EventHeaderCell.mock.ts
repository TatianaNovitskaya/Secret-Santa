// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  eventHeader: {
    __typename: 'EventHeader' as const,
    id: 42,
  },
})
