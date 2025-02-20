# Contact Form

Frontend exercise from Frontend Mentor.io
focus on test driven development

### The challenge

Users should be able to:

-   Complete the form and see a success toast message upon successful submission
-   Receive form validation messages if:
    -   A required field has been missed
    -   The email address is not formatted correctly
-   Complete the form only using their keyboard
-   Have inputs, error messages, and the success message announced on their screen reader
-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshots

![](./src/assets/screenshots/empty.png | width=100)
![](./src/assets/screenshots/errors.png | width=100)
![](./src/assets/screenshots/success.png | width=100)

### Built with

1. React

### What I learned

-   to prevent the form from moving up and down when error states are show, I used css visibility: hidden & visibility: visible; instead of display: none. Display none takes the element out of the dom completely instead of holding space for a potential error message

-   Useful css to show user feedback before submiting the form is the css Pseudo class :invalid, but is activated on blur. Matches invalid input but only after the user interaction, such as by focusing on the control, leaving the control, or attempting to submit the form containing the invalid control.

-   Keyboard interactions change when you aren't using the native radio or checkbox and use a span in it's place. MDN advises to Use the tabindex attribute if the role="radio" is used on an element that does not natively accept keyboard focus. E.g., a <div> or <span>. Likely will also need to write onKeyDown function to select the <span role="radio"/>

-   I tried handling client side form validations, giving immediate user feedback with :user-invalid CSS pseudo-class selectors but had trouble testing this as it's a newer css feature and not available on all browsers. When working properly, the way I implemented this CSS pseudo-class selector is by starting the error message with visibility: hidden, then changing to visibility: visible if an error is present from a required input or pattern mismatch. I like it because it gives feedback immediately when the form field loses focus instead of waiting for the form submission. However, I was not able to get those tests to pass.

### Useful resources

-   [CSS Pseudo Classes REQUIRED ](https://developer.mozilla.org/en-US/docs/Web/CSS/:required)
-   [CSS Pseudo Classes USER-INVALID ](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
-   [IU Pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
-   [How to affect other elements when one element is hovered](https://stackoverflow.com/questions/4502633/how-to-affect-other-elements-when-one-element-is-hovered)
-   [Subsequent-sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator)
-   [:has() CSS Pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
-   [Client Side Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
-   [ValidityState: patternMismatch property](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/patternMismatch)
-   [Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)
-   (Form Validation Youtube)[https://www.youtube.com/watch?v=EQrUGEvnCzY&ab_channel=JamesQQuick]
-   (The Correct Way to Use Form Data in React Youtube)[https://www.youtube.com/watch?v=_QpTQrxzY8A&ab_channel=CosdenSolutions]
    -(ValidityState)[https://developer.mozilla.org/en-US/docs/Web/API/ValidityState]

### Form Submission Notes

# Notes on GET:

Appends the form data to the URL, in name/value pairs
NEVER use GET to send sensitive data! (the submitted form data is visible in the URL!)
The length of a URL is limited (2048 characters)
Useful for form submissions where a user wants to bookmark the result
GET is good for non-secure data, like query strings in Google

# Notes on POST:

Appends the form data inside the body of the HTTP request (the submitted form data is not shown in the URL)
POST has no size limitations, and can be used to send large amounts of data.
Form submissions with POST cannot be bookmarked
