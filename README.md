# Arianna Haradon's City of Austin Dev Challenges

### To get started:

- Install dependencies: `yarn`
- Run a local server: `yarn start`

### Decisions

- I chose to use the React frontend path because I am familiar with and enjoy working with React.
- I chose to use Redux to manage my store because it is plays well with React.
- I used a mostly flat file structure for simplicity because the project was quite small.
- Due to personal time constraints, I decided to leave TODOs and FIXMEs in the code for features that have not yet been built, so that you are able to visualize what my vision for the fully built out app is.

### Limitations
- There were several features that I wanted to build but ran out of time. This includes google image searching the description of the dog in the single dog view and displaying the image (currently a question mark icon is the placeholder). I also wanted to build a google map with markers for where the dangerous dogs live.
- If I had more time, I would write unit tests for each action creator, ensuring that the action creator returned the correct action. I would likely use Jest for this because of the ease of use between Jest and React. I would also test the reducer by mocking the initial state and calling different actions and comparing the new state with the expected output. 
- I would also add data validation for the zip code form, either by writing a regex expression or hitting an API with all valid zip codes in it and searching for the zip code. I would need to research whether zip codes always follow the same rules (I'm unsure of if they skip any numbers).
