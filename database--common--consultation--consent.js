const consent = {
  id: "consent",

  title: {
    en: "Consent",
    ar: "الموافقة"
  },

  steps: [
    {
      id: "ask-permission",
      type: "question",
      required: true,

      text: {
        en: "Is it okay if I ask you some questions about your condition?",
        ar: "هل تسمحلي أسألك شوية أسئلة عن حالتك؟"
      },

      purpose: {
        en: "Obtain permission before starting history taking.",
        ar: "أخذ موافقة المريض قبل بدء أخذ التاريخ المرضي."
      }
    }
  ]
};

export default consent;