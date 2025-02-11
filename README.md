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

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

1. vanilla
2. useForm
3. zod
4. dataform

### What I learned

-   to prevent the form from moving up and down when error states are show, I used css visibility: hidden & visibility: visible; instead of display: none. Display none takes the element out of the dom completely instead of holding space for a potential error message

### Useful resources

-   [CSS Pseudo Classes REQUIRED ](https://developer.mozilla.org/en-US/docs/Web/CSS/:required)
-   [CSS Pseudo Classes USER-INVALID ](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
-   [IU Pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
-   [How to affect other elements when one element is hovered](https://stackoverflow.com/questions/4502633/how-to-affect-other-elements-when-one-element-is-hovered)
-   [Subsequent-sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator)
-   [Client Side Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
-   [ValidityState: patternMismatch property](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/patternMismatch)
-   [Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)
-   (Form Validation Youtube)[https://www.youtube.com/watch?v=EQrUGEvnCzY&ab_channel=JamesQQuick]
-   (The Correct Way to Use Form Data in React Youtube)[https://www.youtube.com/watch?v=_QpTQrxzY8A&ab_channel=CosdenSolutions]

<!-- Code examples useForm
https://github.com/khaduj03/front-end-mentor-challenges-part-3/blob/main/contact-form-main/src/component/form/Form.tsx
https://www.frontendmentor.io/solutions/contact-form-main-2X4dgBQAVr -->

dsf
