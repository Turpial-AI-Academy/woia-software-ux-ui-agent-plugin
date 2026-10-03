# Accessibility and Responsive Behavior

## Accessibility is interaction behavior

Accessibility is not limited to color contrast or a final audit. Determine how users can perceive, understand, navigate, operate, and recover across relevant input and assistive modes.

Use the project's adopted accessibility obligations or platform guidance when present. Do not invent numeric thresholds merely to make the design look rigorous.

## Consider when relevant

### Structure and semantics

- meaningful headings/landmarks;
- programmatic labels and names;
- status/error semantics;
- reading/order relationships;
- semantic controls rather than visual-only affordances.

### Keyboard and focus

- all required actions reachable without pointer-only interaction;
- visible and predictable focus;
- logical focus order;
- dialogs/overlays manage entry, containment when appropriate, dismissal, and focus return;
- error handling moves or announces attention appropriately without disorienting the user.

### Perception

- information not conveyed only by color, position, motion, or iconography;
- text and essential controls remain legible at supported zoom/text-size settings;
- motion has an appropriate reduced-motion behavior when motion is material;
- media alternatives are defined when media carries required information.

### Touch and alternative input

- controls are operable for the target platform/input context;
- gestures have alternatives when a gesture is not self-evident or exclusive;
- spacing prevents accidental activation where risk is material.

## Responsive behavior

Responsive design is not merely shrinking desktop layouts.

For each supported viewport/channel, decide:

- information priority;
- navigation transformation;
- layout reflow;
- component adaptation;
- action placement;
- progressive disclosure;
- table/data visualization strategy;
- overflow and long-content behavior;
- input-method differences.

Preserve task meaning across layouts even when presentation changes.

## Multichannel

If the same task spans web, mobile, desktop, email, chat, kiosk, or another channel, specify which steps belong to which channel and what state is carried between them. Do not promise cross-channel continuity unless the system supports it.

## Validation evidence

Depending on the task, evidence may include:

- semantic/code inspection;
- keyboard traversal;
- focus checks;
- screen-reader or accessibility-tree inspection;
- contrast/style checks against the adopted standard;
- viewport/device checks;
- screenshots or visual snapshots;
- user/usability evidence.

Do not report accessibility PASS based only on a static mockup.
