import React from 'react'
import { Button } from '@/components/ui/button'
const ContactPage = () => {
  return (
    <div className='mt-4 max-w-sm mx-auto p-6 border'>
        <h2 className='mb-4'>Contact Us</h2>
        <p>devshub2024@gmail.com</p>

        <Button variant='outline' className='mt-4'>  <a href="https://join.slack.com/t/stackhubworkspace/shared_invite/zt-2g9xcrczk-1W_kr_1k1gdx6~urzLmNZQ" target='_blank'>Join Slack</a></Button>
      
    </div>
  )
}

export default ContactPage