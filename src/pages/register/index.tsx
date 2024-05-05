import EarlyRegistration, { RegistrationType } from '@/components/earlyRegistration'
import React, { useEffect, useState } from 'react'

function Register() {
    return (
        <EarlyRegistration type={RegistrationType.ATHLETE} />
    )
}


export default Register
