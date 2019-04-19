export const FETCH_API = "FETCH_API";

export const fetchAPI = () => dispatch => {
  try {
    const baseURL =
      "https://dojocms.lifedojo.com/api/v1/cards/get_weekly_program_cards/happiness/program-week-1";
    fetch(baseURL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({ type: FETCH_API, list: data });
      });
  } catch (err) {
    console.log("fetchAPI err", err);
  }
};
