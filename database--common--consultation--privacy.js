const privacy = {
  id: "privacy",

  title: {
    en: "Privacy",
    ar: "الخصوصية"
  },

  steps: [
    {
      id: "ensure-privacy",
      type: "assessment",
      source: "student",
      required: true,

      title: {
        en: "Ensure patient privacy",
        ar: "تأكد من خصوصية المريض"
      },

      instruction: {
        en: "Make sure the consultation is conducted in a private environment.",
        ar: "تأكد أن المقابلة تتم في مكان يحافظ على خصوصية المريض."
      },

      options: [
        {
          id: "done",
          label: {
            en: "Privacy ensured",
            ar: "تم التأكد من الخصوصية"
          }
        },
        {
          id: "not-done",
          label: {
            en: "Privacy not ensured",
            ar: "لم يتم التأكد من الخصوصية"
          }
        }
      ],

      purpose: {
        en: "Maintain patient confidentiality and dignity.",
        ar: "الحفاظ على سرية وخصوصية المريض."
      }
    }
  ]
};

export default privacy;