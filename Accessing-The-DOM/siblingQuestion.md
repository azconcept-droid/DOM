# The sibling question

**If elem – is an arbitrary DOM element node…**

- Is it true that elem.lastChild.nextSibling is always null?
- Is it true that elem.children[0].previousSibling is always null ?

# Answer

1. Yes, true. The element elem.lastChild is always the last one, it has no nextSibling.
2. No, wrong, because elem.children[0] is the first child among elements. But there may exist non-element nodes before it. So previousSibling may be a text node.

Please note: for both cases if there are no children, then there will be an error.

If there are no children, elem.lastChild is null, so we can’t access elem.lastChild.nextSibling. And the collection elem.children is empty (like an empty array []).
