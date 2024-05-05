import EarlyRegistration from '@/components/earlyRegistration'
import React, { useEffect, useState } from 'react'
import { RegistrationType } from '../constants'

function Register() {
    return (
        <EarlyRegistration type={RegistrationType.VOLUNTEER} />
    )
}


export default Register