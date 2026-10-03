# UX/UI Standard

## Purpose

Define a reusable UX/UI decision model that turns product evidence into interaction that can be implemented and verified without imposing one visual style, design tool, frontend stack, or delivery process.

## Core model

~~~text
EVIDENCE
  -> USER GOAL
  -> FLOW
  -> STATE
  -> INTERACTION
  -> VERIFICATION
~~~

A useful UX/UI artifact connects all six layers. A set of attractive screens without flow/state semantics is incomplete; a flow with no perceivable interface behavior is also incomplete.

## Evidence classes

Keep these visibly distinct:

- **observed**: existing product/repository behavior, research, analytics, support evidence, or supplied artifacts;
- **agreed**: requirements, business rules, product decisions, brand/design-system rules, legal/accessibility obligations;
- **inferred**: a reasonable interpretation that still requires confirmation;
- **proposed**: new UX/UI behavior suggested by the capability;
- **unresolved**: a decision that should not be guessed.

## Minimum sufficient design

Choose depth by risk and coordination need.

### Small change

Often sufficient:

- actor/goal;
- one task flow;
- affected screen/state list;
- error/recovery behavior;
- acceptance traceability.

### Product area

May also need:

- navigation/information architecture;
- multiple task flows;
- state catalog;
- responsive behavior;
- accessibility expectations;
- content/microcopy;
- component or design-system rules.

### Cross-product system

May additionally justify:

- shared interaction principles;
- reusable component behavior contracts;
- visual tokens;
- multichannel rules;
- consistency/migration notes.

Do not create the larger artifact merely because a template supports it.

## Interaction before decoration

Prioritize:

1. goals and tasks;
2. sequence and decisions;
3. states and recovery;
4. information/content needed at each step;
5. accessibility and input behavior;
6. responsive adaptation;
7. component/visual consistency.

Visual styling should clarify the interaction rather than substitute for it.

## Existing systems

When a product already has healthy UX/UI conventions:

- preserve navigation semantics and interaction vocabulary;
- reuse established components and states;
- extend tokens/components only when a real gap exists;
- record intentional deviations and why they are needed.

A new design system is not a default deliverable.

## Capability boundaries

UX/UI owns interaction design evidence. It does not independently redefine:

- product scope or requirements;
- domain/business policy;
- system architecture;
- technical API/data contracts;
- coding conventions;
- test strategy;
- deployment procedures.

It may surface conflicts or required handoffs to those capabilities.

## Evidence lifecycle for amendments

For reused interaction evidence, retain its source locator and revision or observation snapshot, supported flow/state and scope, viewport/input/assistive context where material, actual check/observation and result, and freshness conditions. Use the project's existing evidence convention.

- **Reusable:** sources, requirements, state/transition/component semantics, scope, and relevant environment conditions remain unchanged and inspectable.
- **Invalidated:** changed product policy, requirement, component, state, recovery, viewport, or input behavior can alter the claim. Retain previous observations as history and mark the affected claims for revalidation.
- **Fresh:** inspect or exercise affected rendered interaction when assessing implemented behavior, including relevant recovery, keyboard/focus, assistive, and responsive conditions. Missing, contradictory, or stale evidence requires new work.
- **Assumed/proposed:** remain explicit. A mockup, inference, or recollection does not establish executed UI behavior, accessibility, or usability.

Keep unaffected flows, artifacts, and evidence while their conditions remain valid. Revalidate changed surfaces and mandatory cross-cutting invariants, and route invalidated downstream evidence to its independent owner. A screenshot supports its observed visual scope; it does not prove keyboard/focus behavior or every viewport. Design readiness does not imply the proposed interaction has been implemented or user-validated.
