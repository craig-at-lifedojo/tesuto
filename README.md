This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Tasks
* Create a 'ContentList' component and populate it with data from an API endpoint
  * For each list item, print the display_order, header, and "type"
  * Sort the list by the display_order property
* Create a 'ContentDetails' component for viewing items from the ContentList
  * Print the header and body, and display the thumbnail image
  * This component must have a URL for direct linking
* Create a 'FavoriteButton' component and a
  * Add it to the ContentList and ContentDetails components
  * Hook the FavoriteButton to the Redux store for a "Favorites List" (A reducer is provided in index.js)


  https://dojocms.lifedojo.com/api/v1/cards/get_weekly_program_cards/happiness/program-week-1