import Hero from '@/components/Homepage/Hero'
import LeadershipTeam from '@/components/Homepage/LeadershipTeam'
import Sermon from '@/components/Homepage/Sermon'
import ServiceSchedule from '@/components/Homepage/ServiceSchedule'
import UpcomingEvent from '@/components/Homepage/UpcomingEvent'
import Welcome from '@/components/Homepage/Welcome'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <Welcome />
        <ServiceSchedule />
        <UpcomingEvent />
        <LeadershipTeam />
        <Sermon />
    </div>
  )
}

export default page