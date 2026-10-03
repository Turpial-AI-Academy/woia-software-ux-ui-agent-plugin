# Validation Checklist

Use only the checks relevant to the task.

## Evidence and scope

- [ ] Users/actors and goals are source-backed or explicitly proposed.
- [ ] Requirements/business rules used as constraints are identified.
- [ ] Existing healthy UX/UI conventions were inspected before proposing replacements.
- [ ] Assumptions and unresolved questions are visible.
- [ ] Out-of-scope interaction is stated rather than silently omitted.

## Flows

- [ ] Each material goal has a primary flow or a justified not-applicable/out-of-scope decision.
- [ ] Entry conditions and successful outcomes are clear.
- [ ] Important decisions/transitions have explicit conditions.
- [ ] Evidence-backed alternate/error/recovery paths are represented.
- [ ] Navigation, cancellation, and return behavior are defined when material.

## States

- [ ] Relevant loading, empty, success, error, unavailable, permission, partial, conflict, or offline states were considered.
- [ ] Each state communicates what the user can perceive and do.
- [ ] Retry/recovery semantics do not imply guarantees the system cannot make.
- [ ] Unsaved or partially completed work is handled when relevant.

## Accessibility and responsive behavior

- [ ] Keyboard/focus behavior is defined where interactive UI requires it.
- [ ] Semantics/labels/status communication are sufficient for nonvisual interpretation where applicable.
- [ ] Information is not dependent on one sensory cue alone.
- [ ] Responsive behavior preserves task meaning and information/action priority.
- [ ] Adopted accessibility/platform standards are referenced instead of invented thresholds.

## Visual system and components

- [ ] Existing components/tokens were reused where semantically appropriate.
- [ ] New shared patterns solve repeated needs rather than one-off styling.
- [ ] Component states and variants have semantic reasons.
- [ ] Visual hierarchy communicates task, status, and action priority.

## Content

- [ ] Actions describe their consequence.
- [ ] Errors explain recovery when known.
- [ ] Empty/success/progress states are distinguishable.
- [ ] Existing terminology, locale, and tone are preserved unless intentionally changed.

## Readiness

- [ ] An implementer can derive the expected interaction without inventing material product decisions.
- [ ] A reviewer can identify evidence that would support or refute the expected interaction.
- [ ] Validation performed is reported separately from planned or skipped validation.

If the last two checks fail, visual polish does not make the design ready.
