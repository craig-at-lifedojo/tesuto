export async function getUserProgram(dispatch) {
  	fetch('https://dojocms.lifedojo.com/api/v1/cards/get_weekly_program_cards/happiness/program-week-1')
    .then((response) => {
    	if (response.status === 200) {
        	// dispatch to store
         	let rawResponse = response.json;
          	const payload = rawResponse;
          	const load_program_action = {
          		type: 'LOAD_USER_PROGRAM',
          		payload: payload
          	}
          	dispatch(load_program_action);
        } else {
        	// dispatch error message
        }
    }).catch((error) => console.log(error));
};