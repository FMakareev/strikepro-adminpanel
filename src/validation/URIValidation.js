export const URIValidation = (message)=>(value) => value && value.replace(/[a-zA-Zа-яА-Я0-9 -]/gi, '') ? message : null;
