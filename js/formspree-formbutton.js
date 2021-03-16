window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {
  theme: "classic",
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
    name: "name",
    type: "text",
    label: "Name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
  },
  {
    name: "Message",
    type: "textarea",
  },
  {
    name: "Submit",
    type: "submit",
    value: "Submit Form",
  }],
  action: "https://formspree.io/xgepgqvg",
  buttonImg: "<i class='fas fa-comment' style='font-size:24px'/>",
})
