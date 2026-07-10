const closing = {
  id: "closing",

  title: {
    en: "Closing the Consultation",
    ar: "إنهاء المقابلة"
  },

  steps: [
    {
      id: "thank-patient",
      type: "phrase",
      required: true,

      text: {
        en: "Thank you for answering my questions.",
        ar: "شكراً إلك على إجاباتك."
      },

      purpose: {
        en: "End the history politely.",
        ar: "إنهاء أخذ التاريخ بطريقة محترمة."
      }
    },

    {
      id: "ask-final-concern",
      type: "question",
      required: false,

      text: {
        en: "Is there anything else you would like to tell me?",
        ar: "أكو شي ثاني تحب تذكره؟"
      },

      purpose: {
        en: "Allow the patient to add missed information.",
        ar: "إعطاء فرصة للمريض لإضافة أي معلومة ناقصة."
      }
    }
  ]
};

export default closing;