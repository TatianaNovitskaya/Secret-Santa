import type { ListInvitesQuery, ListInvitesQueryVariables } from "types/graphql";

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode
} from "@redwoodjs/web";

import Card from "src/components/Card/Card";
import { useMutation } from "@redwoodjs/web";
import { toast } from "@redwoodjs/web/toast";

export const QUERY: TypedDocumentNode<
  ListInvitesQuery,
  ListInvitesQueryVariables
> = gql`
  query ListInvitesQuery($id: String!, ) {
   event(id: $id) {
    id
    name
    invite {
      id
      email
      name
      user {
        avatar
      }
    }
  }
  }
`;

const DELETE_INVITE_MUTATION = gql`
mutation deleteInviteMutation($id: String!) {
  deleteInvite(id: $id) {
    id
    name
  }
}
`

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: "red" }}>Error: {error?.message}</div>
);

export const Success = ({ event }: CellSuccessProps<ListInvitesQuery>) => {
  const [deleteInvite] = useMutation(DELETE_INVITE_MUTATION, {
    onCompleted: () => {
      toast.success('Invite deleted!')
    },
    onError: (error) =>{
      toast.error(error.message)
      console.log(error);
    },
    refetchQueries: [QUERY]
  })

  const handleDelete = (inviteId) => {
    deleteInvite({
      variables:{
        id: inviteId
      }
    })
  }

  return event.invite.map((item) => {
    return (
      <>
        <Card
          key={item.id}
            avatar={{
            alt: item.name,
            avatar: item?.user?.avatar,
            letter: item.name.charAt(0)
          }}
          email={item.email}
          name={item.name}
          isCloseShowing={true}
          handleClose={() => handleDelete(item.id)}
        />
      </>
    )
  });

};
