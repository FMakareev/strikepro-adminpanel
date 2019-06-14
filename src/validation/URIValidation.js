export const URIValidation = (value) => value && value.replace(/[a-zA-Zа-яА-Я0-9 -]/gi, '') ? 'Допутимы символы: английского алфавита, цифры, дифис.' : null;
