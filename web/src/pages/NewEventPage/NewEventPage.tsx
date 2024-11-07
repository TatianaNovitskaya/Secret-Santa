// import { Link, routes } from '@redwoodjs/router'
import {DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'
import HeaderWithRulers from "src/components/HeaderWithRulers/HeaderWithRulers";
import Checkbox from "src/components/Checkbox/Checkbox";
import { toast } from '@redwoodjs/web/toast';
import {navigate, routes} from "@redwoodjs/router";


const CREATE_EVENT_MUTATION = gql`
mutation createEventMutation($name:String!, $date: DateTime!, $sendReminder: Boolean!) {
  createEvent(
    input: {name: $name, sendReminder: $sendReminder, date: $date}) {
    id
    name
    date
    createdAt
  }
}
`

const NewEventPage = () => {
  const [createEvent, {loading, error}] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: ()=>{
      toast.success("Event was successfully created.")
      navigate(routes.groupInvite())
    },
    onError:(error) =>{
      console.error({error})
      toast.error(error.message)
    }
  })
  const handleSubmit = (data) =>{
    createEvent({
      variables:{
        name: data.eventName,
        date: data.eventDate,
        sendReminder: data.eventReminder
      },

    })
  };
  return (
    <>
      <Metadata title="Set up Your Event" />

      <div className="auth-form">
        <HeaderWithRulers className="mb-8 text-white" heading="Set up Your Event" />
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading}>
          <div className="field">
            <Label name="eventName">Event Name</Label>
            <TextField name="eventName" placeholder=""></TextField>
          </div>
          <div className="field">
            <Label name="eventDate">Event Date</Label>
            <DateField name="eventDate" placeholder=""></DateField>
          </div>

          <Checkbox label="Send out a reminder for an event" name="eventReminder"/>


          <Submit className="">Submit</Submit>
          </fieldset>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
