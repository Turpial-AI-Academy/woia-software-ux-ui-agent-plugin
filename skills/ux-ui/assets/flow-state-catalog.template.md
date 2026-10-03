# Flow and State Catalog

## Flow

- Actor:
- Goal:
- Entry condition:
- Success outcome:
- Requirement / evidence:

~~~text
Start
-> State / screen
-> [decision]
-> State / screen
-> Outcome or recovery
~~~

## State catalog

| State | Trigger / entry | What the user perceives | Available action | Exit / transition | Error or recovery note |
|---|---|---|---|---|---|
| default / ready | | | | | |
| loading / progress | | | | | |
| empty / no result | | | | | |
| success / confirmation | | | | | |
| error / failure | | | | | |

Add authentication/permission, disabled/unavailable, partial-result, conflict/stale-data, offline/retry, or other states only when the product evidence requires them.

## Open decisions

- 

## Validation

- Requirement/acceptance trace:
- Interaction checks:
- Accessibility checks:
- Responsive checks:
- Remaining risks:

### Amendment evidence (when updating an existing flow)

- Reused source/snapshot and supported flow/state:
- Invalidated evidence and affected transitions/recovery:
- Fresh observations/checks, viewport/input context, and results:
- Unrelated valid flows/evidence preserved:
