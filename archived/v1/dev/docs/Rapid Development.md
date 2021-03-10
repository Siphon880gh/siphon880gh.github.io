# Rapid Development Ideas
Here are some ideas to rapidly develop the portfolio because of a lack of time. Not all ideas will be done. This document is more of a reminder to myself of Rapid Development ideas. 
<!-- Keywords: Todo: Review; Rapid Development Ideas -->

## SCSS
### Why
SCSS can compile to CSS. Features like nested selectors makes coding CSS faster.
### How
- That requires compiling. So package.json will use compass to watch the scss files and config.rb will specify the scss directory and css output directory. You'd need to `compass init`
- Another consideration is how would you have comments in the .css files. SCSS supports both multiline and single line comments that are in the style of javascript. Only multiline comments carry over to the CSS outputs.

## Placeholder images
Quickly generate placeholder images on the spot
``https//via.placeholder.com/500x500?text=:)``

## Folders src vs build vs public
### Why
- Because of the added step of compiling, we'd need src and build folders. Build folder will be the output and cleanup performed such as removing the scss files. There will be no minifications of css and javascript because this is a course work. 
- There will be no public folder. Root index will just redirect to the build folder.

## Livereload
### Why
Website will quickly refresh on local server everytime CSS, HTML, or javascript changes are made.

## Emmet Brackets
### Why
Quickly type out HTML structure with short notation in Visual Code.

## BEM notation
### Why
Can notate CSS states or components

Notation is:
```
selector--state-
selector__child
```

An example is:
```
.room { }

  .room__door { }

.room--kitchen { }

.person { }

  .person__head { }


```

[More info](https://getbem.com/introduction/)


## Linter
### Why
Built in linter when building from package.json. It would lint css, js, html. Maybe there's a linter for SEO and accessibility too. Will skip the minification process here.

## JsDocs
### Why
Following the /** */ notation to describe code, using package.json, can generate documentation on the web site or web app.