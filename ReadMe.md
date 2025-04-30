# Create Your Portfolio on Pages

### create an account at https://github.com/

[Github Guide to creating an account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github)

- Click on [this link](https://github.com/Landwhich/GithubWorkshop) and sign in with your account
- click on the fork button, then name your forked version, and keep the default settings
- after you've created your forked version, navigate to "settings" and the "pages" subsection
- Select deploy from master branch and check out your site

### HTML and css basics

html code is built up of "tags" that look like this `<div></div>`. Most elements have an opening and closing tag and will have tags nexted inside them:
```
<div class="arrow-button-container">
    <img src="./static/images/arrow-up.png" class="arrow-icon">
    <button class="arrow-button" onclick="smoothScroll('portfolio-grid', -200)"></button>
</div>
```
many elements will also have attributes within them like `src class id events` and more

One important attribute is `class`. Elements with a class can be referenced in a `.css` file. Cascading Style Sheets are used to assign styles to elements to change their appreance or behaviour. css structure for an arrow button looks like this:
```
.arrow-button:hover{
    transition: background-color 0.25s;
    background-color: rgba(0,0,0,0.5);
    cursor: pointer;
}
```
here, the colour is changed using an rgba field, a transition is applied to the background colour (when the colour changes) and the mouse pointer icon is changed. the `arrow-button` class has the `hover` state specificer indicated by the `:` this means the color and pointer will be changed only when hovering over this element

### Tasks



