// We initialize calendar components here since they don't have SSR support.
// We will render them on the client only by making this plugin ssr:false
import Vue from 'vue'
import BigCalendar from '@/components/Argon/pages/calendar/BigCalendar'
import CalendarWidget from '@/components/Argon/widgets/CalendarWidget'
Vue.component(BigCalendar.name, BigCalendar)
Vue.component(CalendarWidget.name, CalendarWidget)
