const expresions = {
    resultBet: /^[a-z]{3,7}$/,
    uuid: /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/,
    name: /^[a-zA-ZÀ-ÿ\s.]{1,40}$/,
    nameEvent: /^[a-zA-ZÀ-ÿ0-9\s.,]{1,80}$/,
    question: /^[a-zA-ZÀ-ÿ0-9\s.,?¿]{1,80}$/,
    description: /^[a-zA-ZÀ-ÿ0-9\s.,]{1,100}$/,
    password: /^[a-zA-Z0-9_-]{4,12}$/,
    docId: /^([VJE]{1})-(\d{6,12})$/,
    numberPhone: /^(\d{4})-(\d{7})$/,
    date: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
    numberFormat: /^[0-9.,]{8}$/,
};

export { expresions };
