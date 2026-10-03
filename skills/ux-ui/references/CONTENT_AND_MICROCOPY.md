# Content and Microcopy

## Purpose

Interface content should help users understand context, action, consequence, system status, and recovery. It should not invent product policy or compensate for unclear interaction.

## Common content surfaces

When relevant, define:

- page/screen titles and supporting context;
- labels and instructions;
- primary/secondary action labels;
- empty-state guidance;
- validation messages;
- errors and recovery actions;
- success/confirmation messages;
- destructive-action warnings;
- progress/status language;
- placeholders only when they add information beyond a label;
- permission/authentication explanations.

## Error content

A useful error answers, when known:

1. what happened;
2. what was or was not completed;
3. what the user can do next;
4. whether retry is safe;
5. where to get help when self-recovery is not possible.

Do not expose internal stack traces, secret values, or implementation jargon to end users.

## Success content

Success should communicate the actual completed outcome, not merely "Success". When helpful, expose the next useful action or where the result can be found.

## Empty states

Distinguish:

- no data exists yet;
- no results match the current filter/search;
- data cannot be shown due to permission;
- data failed to load;
- data is unavailable offline.

These states have different user actions and should not share misleading copy.

## Voice and terminology

Preserve established product terminology, locale, tone, capitalization, and domain vocabulary. Introduce new wording only when it resolves a concrete clarity problem.

## Localization

When localization applies:

- avoid embedding meaning in word length or English-specific grammar;
- allow layout expansion;
- keep variables/placeholders unambiguous;
- preserve stable terminology where translations are governed externally.
