const communication = {
  id: "communication",

  title: {
    en: "Communication Skills",
    ar: "مهارات التواصل"
  },

  steps: [
    {
      id: "use-clear-language",
      type: "assessment",
      source: "student",
      required: true,

      title: {
        en: "Use clear language",
        ar: "استخدم لغة واضحة"
      },

      instruction: {
        en: "Use simple words and avoid medical jargon.",
        ar: "استخدم كلمات بسيطة وتجنب المصطلحات الطبية المعقدة."
      },

      options: [
        {
          id: "done",
          label: {
            en: "Clear language used",
            ar: "تم استخدام لغة واضحة"
          }
        },
        {
          id: "not-done",
          label: {
            en: "Needs improvement",
            ar: "يحتاج تحسين"
          }
        }
      ],

      purpose: {
        en: "Ensure the patient understands the questions.",
        ar: "حتى يفهم المريض الأسئلة بوضوح."
      }
    },

    {
      id: "show-empathy",
      type: "assessment",
      source: "student",
      required: true,

      title: {
        en: "Show empathy",
        ar: "أظهر التعاطف"
      },

      instruction: {
        en: "Acknowledge the patient's pain or concern.",
        ar: "بيّن للمريض أنك مقدّر ألمه أو قلقه."
      },

      options: [
        {
          id: "done",
          label: {
            en: "Empathy shown",
            ar: "تم إظهار التعاطف"
          }
        },
        {
          id: "not-done",
          label: {
            en: "Not done",
            ar: "لم يتم"
          }
        }
      ],

      purpose: {
        en: "Build trust and rapport.",
        ar: "بناء الثقة والعلاقة مع المريض."
      }
    }
  ]
};

export default communication;