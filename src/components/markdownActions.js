/*const RESET = 'RESET'; --> for eventual reset button componenet*/
export const WRITE = 'WRITE';

export const sendMark = (message) => ({
  type: WRITE,
  payload: message
});
