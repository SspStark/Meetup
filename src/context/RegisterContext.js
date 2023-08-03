import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  isRegistered: false,
  registerError: false,
  getRegistered: () => {},
  updateError: () => {},
})

export default RegisterContext
