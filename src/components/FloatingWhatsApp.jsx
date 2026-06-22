import './FloatingWhatsApp.css'

export default function FloatingWhatsApp({ phoneNumber = '+919360516302' }) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2C7.373 2 2 7.373 2 14c0 2.62.76 5.06 2.06 7.12L2 26l5.1-1.98A11.96 11.96 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
          fill="currentColor"
        />
        <path
          d="M10.5 8.5c-.3 0-.8.2-.9.3-.2.2-.7.7-.7 1.8 0 1 .8 2 1.1 2.3.3.3 2.2 3.6 5.4 4.7.8.3 1.4.5 1.9.6.8.1 1.5-.1 2-.5.5-.4.8-.9.9-.9.1-.1.2-.3.1-.5-.1-.2-.4-.3-.8-.5l-1.2-.5c-.4-.2-.7-.3-.9-.1-.4.3-.7.6-1.1.5-.3-.1-.7-.3-1.2-.7-.5-.4-.9-.8-1.2-1.3-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.3l.4-.5c.2-.2.2-.4.1-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4 0-.6.1z"
          fill="#0a0a0a"
        />
      </svg>
    </a>
  )
}
