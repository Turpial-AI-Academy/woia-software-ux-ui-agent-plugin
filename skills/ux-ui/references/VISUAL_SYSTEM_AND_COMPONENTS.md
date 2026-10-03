# Visual System and Components

## When visual-system work is justified

Create or extend shared visual/component rules when repeated decisions need a stable contract. If the product already has a healthy design system or component library, use it first.

Potential shared dimensions include:

- color roles/tokens;
- typography roles;
- spacing and layout;
- elevation/borders/radii;
- iconography/media;
- component anatomy;
- component interaction states;
- responsive variants;
- feedback/status patterns.

These are examples, not a mandatory checklist.

## Component contract

For a reusable component, define only what consumers need:

- purpose and appropriate use;
- content/data expectations;
- variants with a real semantic reason;
- states and transitions;
- keyboard/focus/accessibility behavior when relevant;
- responsive behavior;
- composition constraints;
- invalid or discouraged uses.

Avoid creating variants merely to match one screen.

## Visual hierarchy

Use hierarchy to communicate:

- current task and context;
- primary versus secondary actions;
- grouping and relationships;
- status and urgency;
- sequence and progressive disclosure.

Do not let aesthetics obscure state, consequence, or recovery.

## Tokens and implementation

Tokens are useful when they reduce drift across repeated decisions. UX/UI may define semantic intent, but implementation technology belongs to the project.

Do not universally prescribe:

- a CSS framework;
- a JavaScript framework;
- a design-system package;
- font families;
- exact breakpoints;
- a color palette.

Adopt these only when supplied by the project or explicitly authorized as a new proposal.

## Existing components

Before adding a component:

1. find existing equivalents;
2. compare semantics/states, not only appearance;
3. extend an existing component when the responsibility remains coherent;
4. create a new component when meaning or behavior is genuinely different;
5. document migration only if inconsistency has real cost.
