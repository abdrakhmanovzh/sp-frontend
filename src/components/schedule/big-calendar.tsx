'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

interface Props {
  events: any[]
}

export function BigCalendar({ events }: Props) {
  return (
    <div className="h-full">
      <FullCalendar
        viewClassNames={'rounded-md'}
        height={'80vh'}
        events={events}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        }}
        slotLaneClassNames={''}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  )
}
