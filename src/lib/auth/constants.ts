export const languagesOptions = [
  {
    label: 'English',
    value: 'english'
  },
  {
    label: 'Russian',
    value: 'russian'
  },
  {
    label: 'Kazakh',
    value: 'kazakh'
  }
]

export const steps = [
  {
    steps: ['name', 'surname', 'email', 'phone', 'birthdate', 'password'],
    name: 'Personal Information',
    id: 'step1'
  },
  {
    steps: ['languages', 'description', 'price'],
    name: 'Details',
    id: 'step2'
  }
]
