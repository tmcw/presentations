# documentation.js

- Why documentation.js?
  - documentation in a modular world
    - turf: many small modules with aggregated docs
    - metalsmith: many small repos with bad docs
  - the rise of JavaScript tooling
    - JSX, TypeScript, and Flow are the drivers
    - JavaScript still lags against languages with IDEs
      - Visual Studio's intellisense system
      - tern attempted to do this
  - Personal motivation: the allure of the abstract
    - documentation.js cares not about problem domains
  - JSDoc as a center of tensions
    - tension between personal responsibility and political requirement
      - http://voices.canonical.com/jussi.pakkanen/2012/09/25/the-code-documentation-fallacy/
      - http://stackoverflow.com/questions/6096649/documenting-node-js-projects/6096709#6096709
        - "JSDoc is a port of JavaDoc. So basically the documentation assumes classical OOP and that's not suited to JavaScript."
    - tension between JavaScript as polymorphic, flexible language and
      a language with type concepts
      - JavaScript is often taught with a regrettable lack of emphasis on types.
        It has types and they matter.
  - the rise of Abstract Syntax Trees
    - parser evolution
      - esprima -> espree
      - babel
    - concrete syntax trees
  - ASTs mean that we can _reliably infer more information about JavaScript
    syntax than we could before_
    - documentation.js can infer
      - function name
      - async vs non-async function
      - param names
      - destructuring params
      - param types
      - class inheritance
      - constant variables
- Documentation culture
  - Does the JavaScript community have a documentation culture?
    - Speaking personally
      - I have a source checkout of **every project I rely on**.
      - On a daily basis, I need to read required code in node_modules
    - Is this normal?
  - JSDoc as a symbol of documentation culture tension:
    - Are the people who document software the same as those who write software?
    - Speaking personally
      - At Mapbox we're at that breaking point: we have a dedicated team that
        writes documentation and does not contribute code to core software.
    - documentation.js typically places doc comments near functions: it is
      the closest thing to self-documenting code, and requires some technical
      knowledge to write.
- Where documentation.js is going
  - stronger inference: can we infer throws statements? statically
    analyze code to infer return types? integrate with flow?
  - stronger api integration: **everyone should be able to use documentation.js**,
    for everything from one-off jQuery plugins to complete production libraries
