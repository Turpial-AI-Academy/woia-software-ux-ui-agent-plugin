# Flows and States

## Flow model

Model each material task as:

~~~text
actor
-> goal
-> entry condition
-> step/state
-> decision or transition
-> next state
-> outcome or recovery
~~~

A flow should make the sequence and conditions explicit enough that implementation does not need to invent product behavior.

## Flow coverage

Start with the primary path. Add alternate paths only when justified by requirements or real risk, such as:

- validation failure;
- permission/authentication change;
- unavailable or empty data;
- asynchronous progress;
- partial completion;
- stale/conflicting data;
- recoverable external failure;
- cancellation/back navigation;
- destructive action confirmation.

Do not create a complete combinatorial state machine when most branches are irrelevant.

## Interface state

For every important step, define:

- what the user can perceive;
- what action is available;
- what is unavailable and why;
- what system status is communicated;
- what transition can happen next;
- how failure or uncertainty is recovered from.

State classes to consider, not blindly require:

| Class | Question |
|---|---|
| default / ready | What can the user do now? |
| loading / progress | What is happening and can it be cancelled? |
| empty / no result | Is there nothing yet, no match, or no permission? |
| success / confirmation | What changed and what is the next useful action? |
| error / failure | What failed, what remained unchanged, and what can recover? |
| disabled / unavailable | Why is an action unavailable? |
| authentication / permission | What must the user do or understand about access? |
| partial result | What succeeded and what did not? |
| conflict / stale data | What changed elsewhere and how can the user reconcile? |
| offline / retry | Is the action safe to retry and what state is retained? |

## Decisions and guards

Name important conditions rather than hiding them inside prose.

Example:

~~~text
Submit form
-> [validation succeeds] Processing
-> [validation fails] Field errors + focus/error summary
~~~

A decision condition should come from requirements, business rules, permissions, or explicit product policy. UX/UI should not invent authorization logic.

## Navigation and return behavior

When material, specify:

- entry and exit points;
- back/cancel behavior;
- deep-link or refresh behavior;
- preservation of unsaved state;
- modal/drawer/dialog dismissal;
- post-success destination.

## Traceability

Link important flows/states to requirement or acceptance identifiers when those exist. Do not create artificial IDs if the project does not benefit from them.
