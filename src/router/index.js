import Vue from 'vue'
import Router from 'vue-router'
import CustomerMain from '../components/layout/CustomerMain.vue'
import RSVP from '../components/rsvp/RSVP.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customermain',
      component: CustomerMain,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      }
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: RSVP,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      }
    }
  ]
})
