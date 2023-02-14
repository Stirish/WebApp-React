module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: ''}

    if (err.message.includes('pseudo'))
        errors.pseudo = 'Le Pseudo doit faire 3 caractères minimum';

    if (err.message.includes('email'))
        errors.email = 'Email incorrect';

    if (err.message.includes('password'))
        errors.password = 'Le Mot de passe doit faire 6 caractères minimum';
    
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = 'Ce Pseudo est déjà enregistré';
    
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = 'Cet Email est déjà enregistré';

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}

    if (err.message.includes('email'))
        errors.email = 'Email Inconnu';

    if (err.message.includes('password'))
        errors.password = 'Le mot de passe ne correspond pas';

    return errors
};