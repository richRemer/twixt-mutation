twixt-mutation Function
=======================

```js
var mutation = require("twixt-mutation"),
    Mutant = require("twixt-mutant"),
    subject = Mutant({});

mutation(subject, function(subject, mutations) {
    var was, is;
    
    for (var prop in mutations) {
        was = mutations[prop];
        is = subject[prop];
        console.log(prop, "mutated from", was, "to", is);
    }
});

subject.foo = 13;   // "foo mutated from undefined to 13"
```
