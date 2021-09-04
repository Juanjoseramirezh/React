const validateForm = user => {
    if (!user.firstName) return { firstName: 'First Name must have 3 characteres' }
    if (!user.lastName) return { lastName: 'Last Name must have 3 characteres' }
    if (!user.email) return { email: 'Email must have 3 characteres' }
    return true
}

export default validateForm