---
name: ux-ui
description: Design, review, or refine UX/UI interaction from project requirements and evidence. Use for user flows, screens and states, transitions, error/empty/loading/success behavior, accessibility, responsive interaction, interface patterns, design-system implications, and implementation-ready UX/UI documentation.
license: MIT
compatibility: Works with software products across platforms and interface technologies; useful evidence may include requirements, existing product behavior, research, analytics, brand/design-system guidance, and repository artifacts.
metadata:
  author: Turpial AI Academy
  version: "0.5.6"
---

# ux-ui

## Operating flow

~~~text
DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT
~~~

## Purpose

Turn requirements and product evidence into the minimum sufficient interaction design needed for implementation and verification while preserving healthy existing product and interface conventions.

The governing chain is:

~~~text
EVIDENCE -> USER GOAL -> FLOW -> STATE -> INTERACTION -> VERIFICATION
~~~

Load [UX_UI_STANDARD.md](references/UX_UI_STANDARD.md) for a new interaction baseline or when scope or design obligations are materially uncertain.

## Non-negotiable rules

- Discover actual users, goals, requirements, constraints, existing behavior, and interface conventions before proposing interaction.
- Separate observed/source-backed facts from assumptions, proposals, and unresolved questions.
- Design flows and states before polishing screens. A visually complete screen set is insufficient if transitions, decisions, errors, or recovery are unclear.
- Cover only states justified by the product. Do not manufacture edge cases, personas, breakpoints, metrics, or accessibility thresholds without evidence or an adopted standard.
- Treat accessibility as part of interaction design, not a late visual audit.
- Make responsive or multichannel behavior explicit when the product actually spans different viewports, input modes, or channels.
- Preserve healthy design systems, component libraries, content conventions, and visual identity when they already exist.
- Do not impose React, Tailwind, a component library, fonts, color palettes, or any other implementation choice unless it is an established project constraint.
- A design system is optional. Introduce or extend one only when repeated interface decisions need a shared contract.
- Microcopy must support user decisions, outcomes, errors, recovery, and trust; it must not invent business policy.
- Do not claim usability, accessibility, stakeholder approval, or implementation readiness without corresponding evidence.
- Keep requirements ownership with requirements, architecture ownership with architecture, technical contracts with technical design, implementation with development, and verification strategy with testing. UX/UI may expose implications and handoffs without taking over those capabilities.
- When interaction design is not applicable, state why and preserve that evidence instead of fabricating an artifact.

## Execution depth

Use a bounded amendment when the canonical UX/UI artifact is healthy, the requested interaction change is local and understood, and supporting evidence is durable and inspectable. A new turn alone does not invalidate that evidence.

For a bounded amendment:

1. locate the authoritative flow, state, component, or microcopy and its requirement/source links;
2. identify affected transitions, recovery, input/focus behavior, responsive contexts, and shared-component consumers;
3. inspect only the sources and existing interaction needed to establish those effects;
4. amend the smallest coherent flow/state or content unit, preserving unrelated flows, healthy conventions, and valid evidence;
5. verify the affected interaction plus the mandatory requirement/business-rule consistency, actor/goal, transition/state/recovery, applicable accessibility/responsive, and no-invented-policy invariants;
6. report changed surfaces, reused or invalidated evidence, fresh observations/checks and results, preserved interaction, and unresolved decisions.

Take the deep path for a new interaction baseline, unclear scope or behavior, contradictory sources, unhealthy conventions, missing durable evidence for the gate, or a failed invariant. Also deepen handling for material public API/event/schema contracts, persisted or unsaved-state semantics and migrations, auth/authorization/secrets/trust boundaries, destructive actions, deployment/rollback/availability risk, cross-provider dependencies, shared-component behavior contracts, or uncertain accessibility/input/recovery obligations. Route product, technical, security, and independent testing decisions to their owning capability.

Reuse evidence only while its source/revision or observation snapshot, flow/state semantics, scope, and viewport/input/assistive conditions remain valid. Retain an inspectable locator, the actual check or observation, and its result. A changed requirement, state, component, or recovery behavior invalidates dependent visual and interaction evidence; freshly observe or revalidate the affected claims before restoring their status. Inference, recollection, proposed mockups, and a static screenshot are not proof of executed interaction or accessibility compliance. Preserve unrelated valid evidence and amortize expensive observations until relevant mutation, drift, or freshness conditions invalidate them.

When assessing implemented UI behavior, inspect or exercise the affected rendered states and relevant input/recovery behavior with available browser or target-app tools. Use authorized safe or ephemeral scenarios; do not execute real destructive effects merely to validate a design. Design sufficiency and observed product behavior are distinct: builds, static mockups, or metadata checks alone do not establish UI/accessibility PASS.

Load references progressively: the standard for new/uncertain interaction, flows/states for transition questions, accessibility/responsive for applicable input or viewport obligations, visual/component guidance for shared patterns, content guidance for meaningful language decisions, and the checklist for relevant readiness obligations. Load templates only for a new or insufficient artifact. The deep path retains the complete UX/UI gate, including a justified not-applicable outcome when interaction is outside scope.

## Discover

Use [FLOWS_AND_STATES.md](references/FLOWS_AND_STATES.md) when creating or clarifying flows, decisions, states, or transitions. For a healthy bounded amendment, start with the affected interaction and its source links.

Inspect, when available:

- requirements, acceptance criteria, business rules, user stories, product goals, users/actors, permissions, and known constraints;
- existing product screens, routes, components, interaction patterns, navigation, content, and state handling;
- existing design-system, brand, visual-identity, content, accessibility, localization, and responsive guidance;
- research, support feedback, analytics, usability findings, incident evidence, or observed friction when available;
- platform and input constraints such as desktop/mobile/web/native, keyboard, touch, assistive technology, latency, intermittent connectivity, or permissions when materially relevant;
- existing tests or implementation only as evidence of current behavior, not as authority over desired product behavior.

Build an evidence map:

~~~text
source/evidence
  -> user or actor
  -> goal
  -> entry condition
  -> flow
  -> decision/transition
  -> interface state
  -> outcome/recovery
  -> verification evidence
~~~

Record contradictions and missing decisions instead of silently resolving them.

## Decide

Choose the minimum useful UX/UI depth.

A small change may need one flow plus a state matrix. A larger product area may justify navigation structure, multiple task flows, screen/state definitions, component behavior, responsive rules, accessibility requirements, content guidance, and a design-system extension.

Use:

- [FLOWS_AND_STATES.md](references/FLOWS_AND_STATES.md) for interaction logic;
- [ACCESSIBILITY_AND_RESPONSIVE.md](references/ACCESSIBILITY_AND_RESPONSIVE.md) when input modes, assistive technology, viewport changes, or multichannel behavior matter;
- [VISUAL_SYSTEM_AND_COMPONENTS.md](references/VISUAL_SYSTEM_AND_COMPONENTS.md) for repeated visual/component decisions;
- [CONTENT_AND_MICROCOPY.md](references/CONTENT_AND_MICROCOPY.md) for interface language.

Prefer the smallest artifact that allows an implementer to derive expected interaction and a reviewer to verify it.

## Implement

Use the repository's existing UX/UI artifact when healthy. Otherwise adapt [ux-ui-document.template.md](assets/ux-ui-document.template.md). Use [flow-state-catalog.template.md](assets/flow-state-catalog.template.md) when a compact state catalog is enough.

Honor an explicit caller-required path. Under the `ux-ui/v1` contract, the output is `docs/project/04-UX-UI.md`; standalone use preserves the repository's healthy source of truth. Do not replay a full template for a bounded amendment.

For each material flow:

1. identify the actor, goal, entry condition, and successful outcome;
2. map the main path and only evidence-backed alternate/error/recovery paths;
3. name decisions and transition conditions;
4. define the meaningful interface states for each step;
5. specify what the user can perceive, do, and recover from in each state;
6. connect relevant requirements or acceptance criteria;
7. add responsive, accessibility, content, or component guidance only where it changes expected behavior;
8. mark unresolved product decisions explicitly.

Common state classes include default/ready, loading/progress, success/confirmation, empty/no-result, error/failure, disabled/unavailable, authentication/permission, conflict/stale-data, partial-result, and offline/retry. They are a discovery checklist, not mandatory boilerplate.

Wireframes or visual mockups may help but are not mandatory proof. Textual flows, state diagrams, interaction tables, or annotated existing screens are valid when they communicate the interaction more precisely.

## Validate

Use the relevant obligations in [VALIDATION_CHECKLIST.md](references/VALIDATION_CHECKLIST.md) when readiness or validation scope needs clarification. Bounded amendments still check the mandatory invariants above.

The design is ready only when the relevant interaction can be derived and checked from the evidence. Validate, as applicable:

- every material user goal maps to a flow or is explicitly out of scope;
- transitions and decisions are unambiguous enough to implement;
- required states, errors, recovery, and permissions are visible;
- interface behavior does not contradict requirements or business rules;
- accessibility and responsive behavior are addressed where material;
- content helps users understand action, status, consequence, and recovery;
- reused or proposed component patterns are internally consistent;
- unresolved questions are visible rather than hidden by visual polish;
- an implementer can act without inventing material interaction decisions;
- a reviewer can identify evidence that would support or refute the expected interaction.

Do not equate template completion, a screenshot, or aesthetic consistency with validation.

## Report

Report:

1. evidence inspected and current-state facts;
2. users/actors and goals in scope;
3. flows, states, transitions, and recovery behavior created or clarified;
4. accessibility/responsive/content/component decisions that materially apply;
5. existing conventions preserved and proposals introduced;
6. validation actually performed and its results;
7. unresolved product decisions, assumptions, and risks;
8. handoffs to requirements, architecture, technical design, development, testing, security, or documentation.

Keep facts, proposals, and unresolved questions visibly distinct.

## Detailed references

- [UX/UI Standard](references/UX_UI_STANDARD.md)
- [Flows and States](references/FLOWS_AND_STATES.md)
- [Accessibility and Responsive Behavior](references/ACCESSIBILITY_AND_RESPONSIVE.md)
- [Visual System and Components](references/VISUAL_SYSTEM_AND_COMPONENTS.md)
- [Content and Microcopy](references/CONTENT_AND_MICROCOPY.md)
- [Validation Checklist](references/VALIDATION_CHECKLIST.md)
