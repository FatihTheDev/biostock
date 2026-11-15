# Test Documentation

## Overview

The project uses [Vitest](https://vitest.dev/) for unit tests. The tests live in this folder and are configured in [`vitest.config.ts`](../../vitest.config.ts).

- **Framework:** Vitest
- **Test files:** 2
- **Total tests:** 14
- **Business-logic tests:** 10
- **Component tests:** 4
- **External services:** not used
- **Mocks:** none for external dependencies; `vi.fn()` is used only for callback props

## How to run

```bash
npm test
```

Run with coverage:

```bash
npm run test:coverage
```

Coverage is printed in the terminal and written to the `coverage/` folder.

## Test cases

### Business logic: `schemas.test.ts`

Ingredient validation:

1. Accepts a valid ingredient.
2. Uses empty strings when the thumbnail and description are missing.
3. Rejects an ingredient with an empty name.
4. Rejects an ingredient without an id.
5. Rejects an empty ingredient list.

Recipe validation:

6. Accepts a valid recipe.
7. Fills in default recipe fields.
8. Rejects a recipe with an empty name.

Recipe-generation input:

9. Rejects an empty ingredient list.
10. Rejects a blank ingredient.

### Frontend component: `floating-input.test.tsx`

11. Searches with trimmed text and clears the input.
12. Hides the generate button by default.
13. Shows the generate button and calls `onGenerate`.
14. Disables the buttons while loading.

## Coverage

Latest report:

------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------------|---------|----------|---------|---------|-------------------
All files                     |     100 |      100 |     100 |     100 |                   
 app/components/floatinginput |     100 |      100 |     100 |     100 |                   
  floatinginput.tsx           |     100 |      100 |     100 |     100 |                   
 lib                          |     100 |      100 |     100 |     100 |                   
  schemas.ts                  |     100 |      100 |     100 |     100 |                   
------------------------------|---------|----------|---------|---------|-------------------

### What coverage tells us

Every statement, branch, and function in the tested files is executed by the tests. The validation rules and the search-input behaviour are exercised.

### What coverage does not tell us

Coverage does not prove that the assertions are meaningful or that the app is correct. It does not cover:

- MongoDB models,
- the API routes,
- the full meal-prep page,
- live TheMealDB responses,
- the visual layout or accessibility.

A high coverage number is not a replacement for code review or integration/end-to-end testing.

## Requirements checklist

- **Behavior, not implementation:** tests check accepted/rejected data and visible component behavior.
- **Boundary values:** empty strings, missing fields, `undefined` required values, empty arrays, and blank array items are covered.
- **Error cases:** invalid ingredients, invalid recipes, and invalid generation input are covered.
- **Mock only external dependencies:** the suite has no external dependencies to mock. `vi.fn()` callbacks are test doubles for component props, not mocked modules or services.
