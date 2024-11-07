
import { EmailField, Form, Label, TextField, useForm } from "@redwoodjs/forms";
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Card from '../Card/Card'
import ListInvitesCell from '../ListInvitesCell'
import RoundButton from '../RoundButton/RoundButton'

const CREATE_INVITE_MUTATION = gql`
  mutation createInviteMutation(
    $eventId: String!
    $email: String!
    $name: String!
  ) {
    createInvite(
      input: { eventId: $eventId, status: INVITED, email: $email, name: $name }
    ) {
      email
      id
      name
      status
    }
  }
`

const InviteGroup = ({ id }) => {
  const formMethods = useForm()

  const [createInvite, {loading}] = useMutation(CREATE_INVITE_MUTATION, {
    onError: (error) => {
      toast.error(error.message)
      console.log(error.message)
    }, onCompleted: () => {
      toast.success('Invite sent!')
      formMethods.reset()
    }
  })
  const handleSubmit = (data) => {
    console.log({data})
    createInvite({
      variables: { ...data, eventId: id}
    })
  }

  return (
    <div>
      {/* form */}
      <div className="label ml-5 dark:text-white">Invite a friend or family member</div>
      <Form onSubmit={handleSubmit} formMethods={formMethods}>
        <fieldset disabled={loading}>
        <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4 dark:bg-blackPearl">
          <div className="field mb-0 flex-1">
            <Label name="name">Name</Label>
            <TextField
              name="name"
              className="input"
              placeholder=""
            />
          </div>
          <div className="field mb-0 flex-1">
            <Label name="email">Email</Label>
            <EmailField
              name="email"
              className="input"
              placeholder=""
            />
          </div>
          <RoundButton status="warning" type="submit"/>
        </div>
        </fieldset>
      </Form>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <ListInvitesCell id={id}/>

      </div>
    </div>
  )
}

export default InviteGroup
