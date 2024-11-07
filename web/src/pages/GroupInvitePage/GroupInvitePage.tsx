// import { Link, routes } from '@redwoodjs/router'
import {Metadata} from '@redwoodjs/web'

import EventHeaderCell from "src/components/EventHeaderCell";
import InviteGroup from "src/components/InviteGroup/InviteGroup";

const GroupInvitePage = ({ id }) => {
  return (
    <>
      <Metadata title="Invite friends and family"/>

      <EventHeaderCell id={id}/>

      <InviteGroup id={id}/>
    </>
  )
}

export default GroupInvitePage
