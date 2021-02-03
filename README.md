## About this form

- Project is created using create-react-app
- Roboto font is used as per the requirement and third party libraries like bootstrap are not used.
- The form comprises:
  - Two text input fields (Email/Password)
    - When user start typing in the field, the field gets validated and a error message is shown below
  - One checkbox field (Remember Me)
  - One button (Sign In)
    - Button will remain disabled till the input fields pass the validation
  - Three links below the Sign In button (underlined)
    - Links will redirect to the same page
- Submitting the form will send a post request to `localhost:8000/api/login`.
