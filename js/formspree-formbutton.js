window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {
  // theme: "classic",
  title: "Contact me",
  description: "",
  styles: {
    button: {
      background: "#515151",
    },
    title: {
      background: "#515151",
      letterSpacing: "0.05em",
      fontFamily:'"Raleway", cursive',
    }
  },
    fields: [
  {
    name: "_subject",
    type: "hidden",
    label: "",
    value: "message from lar-mo.io contact form",
  },
  {
    type: "email",
    label: "Email:",
    name: "email",
    required: true,
    placeholder: "your@email.com"
  },
  {
    type: "textarea",
    label: "Message:",
    name: "message",
    placeholder: "What's on your mind?",
  },
  {
    name: "Submit",
    type: "submit",
    value: "Send Message",
  }],
  action: "https://formspree.io/xgepgqvg",
  buttonImg: "<i class='fas fa-comment' style='font-size:24px'/>",
})
