export default {
  "pageInfo": {
    "title": "Task Force Sign-up",
    "content": "Want to get involved? Join the frontline in safeguarding our communities against the zombie threat. The Zombie Task Force is calling on EMR/EMT/Paramedics, Police Officers, Firefighters, and any vigilant citizens—particularly those with military experience—to help us respond more effectively to potential outbreaks. Your skills and dedication may be crucial in helping us understand, contain, and overcome reanimated threats.",
    "heading": "CDC Zombie Task Force - Create Account",
    "backgroundImage": "../../assets/custom/img/hero/taskforce.jpg"
  },
  "form": {
    "id": "create",
    "fields": [
      {
        "id": "email",
        "label": "Email address",
        "type": "email",
        "placeholder": "Enter your email"
      },
      {
        "id": "password",
        "label": "Password",
        "type": "password",
        "placeholder": "Enter your password"
      },
      {
        "id": "specialty",
        "label": "Select specialty",
        "type": "multi-select",
        "options": [
          {
            "value": "emr-emt-paramedic",
            "label": "EMR/EMT/Paramedic"
          },
          {
            "value": "firefighter",
            "label": "Firefighter"
          },
          {
            "value": "police-officer",
            "label": "Police officer"
          },
          {
            "value": "concerned-citizen",
            "label": "Concerned citizen"
          }
        ]
      }
    ],
    "buttons": [
      {
        "label": "Sign-up"
      }
    ]
  },
  "sidebar": {
    "title": "Be part of the solution",
    "content": [
      {
        "text": "CDC’s **Zombie Task Force** provides technical assistance to cities, states, or international partners dealing with a zombie infestation. Zombie Task Force members are on the frontline, helping CDC scientists work to identify the cause and cure of the zombie outbreak, and helping those in affected areas.",
        "list": [
          "**Determine root cause:** help identify the source of the infection/virus/toxin.",
          "**Break the cycle:** learn how it is transmitted and how readily it is spread, and prevent further cases."
        ]
      },
      {
        "title": "",
        "text": "---"
      },
      {
        "title": "Are you a federal employee?",
        "text": "If you are a federal employee, please use [Login.gov](https://login.gov)."
      }
    ]
  }
}
