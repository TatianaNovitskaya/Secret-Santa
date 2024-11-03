// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const NewEventPage = () => {
  return (
    <>
      <Metadata title="NewEvent" description="NewEvent page" />

      <h1>NewEventPage</h1>
      <p>
        Find me in <code>./web/src/pages/NewEventPage/NewEventPage.tsx</code>
      </p>
      {/*
          My default route is named `newEvent`, link to me with:
          `<Link to={routes.newEvent()}>NewEvent</Link>`
      */}
    </>
  )
}

export default NewEventPage
