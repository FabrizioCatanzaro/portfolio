import React from 'react'
import './Contact.css'
import toast from 'react-hot-toast'

const Contact = () => {

    const autoResponse = `
    Hi there!

    Thank you for your interest in contacting me! I really appreciate you taking the time to do so.

    Your message is important to me, so I'll be happy to respond to any questions or comments you have as soon as possible. If you need more information about my services or products, or if you just want to chat, feel free to reach out to me on LinkedIn.

    I look forward to the opportunity to connect and work together in the near future. Again, thank you for your interest and for taking the time to reach out to me.

    Best regards,
    Fabrizio Catanzaro
    `
    return (
        <section className='contact' id='contact'>
            <h2 className='titlePageContact'>Let's <span className='dotColored'>get in touch</span> with me<span className='dotColored'>.</span></h2>
            <form className='formContact' action='https://formsubmit.co/cc4b5a2942803c9893ecca6331252d1e' method='POST' onSubmit={() => toast('Almost ready!', {
                duration: 1000,
                position: 'top-center',
                icon: '📩',
                removeDelay: 500
            })}>
                <label>
                    <span>Full name</span>
                    <input type='text' name='Name and surname' required />
                </label>
                <label>
                    <span>E-mail</span>
                    <input type='email' name='email' required />
                </label>
                <label> 
                    <span>Tell me, in a few words, the purpose of your message</span>
                    <textarea name='Message' required />
                </label>
                <input type="hidden" name="_autoresponse" value={autoResponse} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Nuevo mensaje en Portfolio!" />
                <input type='submit' value='Send' id='btnSendContact' />
            </form>
        </section>
    )
}

export default Contact