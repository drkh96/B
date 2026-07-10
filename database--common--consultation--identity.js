const identity = {
  id: "identity",

  title: {
    en: "Patient Identity",
    ar: "هوية المريض"
  },

  steps: [
    {
      id: "patient-name",
      type: "question",
      required: true,

      text: {
        en: "Could you please tell me your full name?",
        ar: "ممكن أعرف اسمك الكامل؟"
      },

      purpose: {
        en: "Confirm the patient's identity.",
        ar: "تأكيد هوية المريض."
      }
    },

    {
      id: "patient-age",
      type: "question",
      required: true,

      text: {
        en: "How old are you?",
        ar: "شكد عمرك؟"
      },

      purpose: {
        en: "Age is an essential demographic factor that influences differential diagnosis and clinical decision-making.",
        ar: "العمر من أهم المعلومات التي تؤثر على التشخيصات المحتملة واتخاذ القرار السريري."
      }
    },

    {
      id: "patient-gender",
      type: "assessment",
      source: "student",
      required: true,

      title: {
        en: "What is the patient's gender?",
        ar: "ما جنس المريض؟"
      },

      instruction: {
        en: "Determine the patient's gender by observation without asking the patient.",
        ar: "حدد جنس المريض بالملاحظة دون سؤال المريض."
      },

      options: [
        {
          id: "male",
          label: {
            en: "Male",
            ar: "ذكر"
          }
        },
        {
          id: "female",
          label: {
            en: "Female",
            ar: "أنثى"
          }
        }
      ],

      purpose: {
        en: "Gender influences differential diagnosis, disease prevalence, and management.",
        ar: "الجنس يؤثر على التشخيصات المحتملة، انتشار الأمراض، والخطة العلاجية."
      }
    },

    {
      id: "patient-occupation",
      type: "question",
      required: false,

      text: {
        en: "What is your occupation?",
        ar: "شنو شغلك؟"
      },

      purpose: {
        en: "Identify occupational exposure and risk factors.",
        ar: "معرفة عوامل الخطورة أو التعرضات المرتبطة بالعمل."
      }
    }
  ]
};

export default identity;