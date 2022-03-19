const expresions = {
    userName: /^[a-zA-Z0-9_-]{4,16}$/,
    name: /^[a-zA-ZÀ-ÿ\s.]{1,40}$/,
    description: /^[a-zA-ZÀ-ÿ0-9\s.,]{1,100}$/,
    password: /^[a-zA-Z0-9_-]{4,12}$/,
    docId: /^([VJE]{1})-(\d{6,12})$/,
    numberPhone: /^(\d{4})-(\d{7})$/,
    date: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
    numberFormat: /^[0-9.,]{8}$/,
};

export { expresions };