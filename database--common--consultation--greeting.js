const greeting = {
  id: "greeting",

  title: {
    en: "Greeting",
    ar: "الترحيب"
  },

  steps: [
    {
      id: "say-hello",
      type: "phrase",
      required: true,

      text: {
        en: "Hello, good morning.",
        ar: "مرحباً، صباح الخير."
      },

      purpose: {
        en: "Start the consultation politely.",
        ar: "بدء المقابلة بطريقة محترمة."
      }
    },

    {
      id: "introduce-self",
      type: "phrase",
      required: true,

      text: {
        en: "My name is [name], I am a medical student.",
        ar: "اسمي [الاسم]، وأنا طالب طب."
      },

      purpose: {
        en: "Introduce yourself to the patient.",
        ar: "تعريف نفسك للمريض."
      }
    },

    {
      id: "role-explanation",
      type: "phrase",
      required: true,

      text: {
        en: "I would like to ask you some questions about your condition.",
        ar: "أريد أسألك بعض الأسئلة عن حالتك."
      },

      purpose: {
        en: "Explain the purpose of the interview.",
        ar: "توضيح هدف المقابلة."
      }
    }
  ]
};

export default greeting;