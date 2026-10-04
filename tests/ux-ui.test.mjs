import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const ROOT = path.resolve(import.meta.dirname, "..");

async function text(relativePath) {
  return readFile(path.join(ROOT, ...relativePath.split("/")), "utf8");
}

function preservesUnrelatedInteractionEvidence(text) {
  return text.split(/[.!?\n]+/).some((statement) => (
    /\b(?:preserve|keep|retain)\b/i.test(statement) &&
    /\b(?:unrelated|unaffected)\b/i.test(statement) &&
    /\b(?:flows|artifacts)\b/i.test(statement) &&
    /\bevidence\b/i.test(statement) &&
    /\bvalid\b/i.test(statement) &&
    !/\b(?:not|never|discard|remove)\b/i.test(statement)
  ));
}

test("ux-ui skill exposes an evidence-to-verification interaction model", async () => {
  const skill = await text("skills/ux-ui/SKILL.md");
  assert.match(skill, /EVIDENCE -> USER GOAL -> FLOW -> STATE -> INTERACTION -> VERIFICATION/);
  assert.match(skill, /DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT/);
  assert.match(skill, /minimum sufficient interaction design/i);
  assert.match(skill, /not applicable/i);
});

test("ux-ui progressive disclosure covers flows, accessibility, visual system, content, and validation", async () => {
  const skill = await text("skills/ux-ui/SKILL.md");
  for (const ref of [
    "UX_UI_STANDARD.md",
    "FLOWS_AND_STATES.md",
    "ACCESSIBILITY_AND_RESPONSIVE.md",
    "VISUAL_SYSTEM_AND_COMPONENTS.md",
    "CONTENT_AND_MICROCOPY.md",
    "VALIDATION_CHECKLIST.md",
  ]) {
    assert.match(skill, new RegExp(ref.replace(".", "\\.")));
    await access(path.join(ROOT, "skills", "ux-ui", "references", ref));
  }
});

test("flow guidance treats state classes as a contextual checklist rather than mandatory boilerplate", async () => {
  const flows = await text("skills/ux-ui/references/FLOWS_AND_STATES.md");
  for (const state of [
    "default / ready",
    "loading / progress",
    "empty / no result",
    "success / confirmation",
    "error / failure",
    "authentication / permission",
    "partial result",
    "conflict / stale data",
    "offline / retry",
  ]) assert.match(flows, new RegExp(state.replace("/", "\\/"), "i"));
  assert.match(flows, /not blindly require/i);
});

test("portable UX/UI policy rejects framework and brand lock-in", async () => {
  const portable = [
    await text("skills/ux-ui/SKILL.md"),
    await text("skills/ux-ui/references/UX_UI_STANDARD.md"),
    await text("skills/ux-ui/references/VISUAL_SYSTEM_AND_COMPONENTS.md"),
  ].join("\n");
  assert.match(portable, /Do not impose React, Tailwind/i);
  assert.match(portable, /Do not universally prescribe/i);
  assert.doesNotMatch(portable, /must (?:use|adopt) (?:React|Tailwind|Next\.js|Material UI)/i);
  assert.doesNotMatch(portable, /required font (?:family|families)/i);
  assert.doesNotMatch(portable, /required color palette/i);
});

test("ux-ui keeps neighboring capability ownership explicit", async () => {
  const skill = await text("skills/ux-ui/SKILL.md");
  assert.match(skill, /requirements ownership with requirements/i);
  assert.match(skill, /architecture ownership with architecture/i);
  assert.match(skill, /implementation with development/i);
  assert.match(skill, /verification strategy with testing/i);
});

test("templates retain evidence traceability and recovery semantics", async () => {
  const full = await text("skills/ux-ui/assets/ux-ui-document.template.md");
  const compact = await text("skills/ux-ui/assets/flow-state-catalog.template.md");
  assert.match(full, /Evidence used/);
  assert.match(full, /Requirement trace/);
  assert.match(full, /Transition \/ recovery/);
  assert.match(full, /Validation evidence/);
  assert.match(compact, /Requirement \/ evidence/);
  assert.match(compact, /Error or recovery note/);
  assert.match(compact, /Remaining risks/);
});

test("bounded interaction amendments preserve flows and reconcile affected state and recovery", async () => {
  const skill = await text("skills/ux-ui/SKILL.md");
  const policy = skill.split("## Execution depth")[1]?.split("## Discover")[0] ?? "";
  for (const obligation of [
    /bounded amendment[\s\S]*canonical[\s\S]*healthy/i,
    /authoritative[\s\S]*flow[\s\S]*state[\s\S]*component[\s\S]*source links/i,
    /affected transitions[\s\S]*recovery[\s\S]*input[\s\S]*responsive[\s\S]*consumers/i,
    /smallest[\s\S]*flow\/state[\s\S]*preserv[\s\S]*unrelated[\s\S]*valid evidence/i,
    /mandatory[\s\S]*business-rule[\s\S]*accessibility[\s\S]*responsive/i,
  ]) assert.match(policy, obligation);
  assert.match(skill, /ux-ui\/v1[\s\S]*docs\/project\/04-UX-UI\.md/);
});

test("deep interaction handling preserves uncertainty, safety and justified non-applicability", async () => {
  const skill = await text("skills/ux-ui/SKILL.md");
  const policy = skill.split("## Execution depth")[1]?.split("## Discover")[0] ?? "";
  for (const trigger of [
    /deep path[\s\S]*new interaction baseline/i,
    /unclear scope[\s\S]*contradictory sources/i,
    /missing durable evidence[\s\S]*failed invariant/i,
    /API[\s\S]*schema[\s\S]*persisted[\s\S]*migration/i,
    /auth[\s\S]*trust[\s\S]*destructive actions/i,
    /deployment[\s\S]*rollback[\s\S]*availability/i,
    /cross-provider dependencies[\s\S]*shared-component[\s\S]*accessibility/i,
    /\b(?:complete|full)\b[^.!?\n]*UX\/UI[^.!?\n]*gate/i,
    /justified[\s\S]*not-applicable/i,
  ]) assert.match(policy, trigger);
});

test("interaction evidence is scoped, invalidated by behavior and refreshed through relevant observation", async () => {
  const standard = await text("skills/ux-ui/references/UX_UI_STANDARD.md");
  const lifecycle = standard.split("## Evidence lifecycle for amendments")[1] ?? "";
  for (const obligation of [
    /locator[\s\S]*revision[\s\S]*scope[\s\S]*input[\s\S]*result/i,
    /Reusable[\s\S]*unchanged[\s\S]*inspectable/i,
    /Invalidated[\s\S]*history[\s\S]*revalidation/i,
    /Fresh[\s\S]*rendered[\s\S]*recovery[\s\S]*keyboard\/focus[\s\S]*responsive/i,
    /Assumed\/proposed[\s\S]*(?:does not|cannot|never)[^.!?\n]*(?:establish|prove|demonstrate)[^.!?\n]*executed/i,
    /independent[\s\S]*owner/i,
    /screenshot[\s\S]*(?:does not|cannot)[\s\S]*keyboard\/focus/i,
  ]) assert.match(lifecycle, obligation);
  assert.ok(preservesUnrelatedInteractionEvidence(lifecycle), "unaffected valid interaction artifacts and evidence must be preserved");
  const skill = await text("skills/ux-ui/SKILL.md");
  assert.match(skill, /implemented UI[\s\S]*rendered states[\s\S]*browser or target-app tools/i);
  assert.match(skill, /authorized[\s\S]*safe or ephemeral[\s\S]*destructive effects/i);
  assert.match(skill, /builds[\s\S]*static mockups[\s\S]*(?:do not|cannot)[^.!?\n]*UI\/accessibility PASS/i);
});

test("interaction preservation checks accept paraphrases and reject missing or negated obligations", () => {
  assert.ok(preservesUnrelatedInteractionEvidence("Keep unaffected flows and their evidence while they remain valid."));
  assert.ok(preservesUnrelatedInteractionEvidence("Retain valid evidence together with unrelated interaction artifacts."));
  for (const invalid of [
    "Keep valid flows and their evidence.",
    "Keep unaffected valid flows.",
    "Do not retain unaffected valid artifacts and evidence.",
    "Discard unrelated flows and valid evidence.",
  ]) assert.equal(preservesUnrelatedInteractionEvidence(invalid), false);
});

test("interaction references load by decision need and both templates report amendment evidence", async () => {
  const skill = await text("skills/ux-ui/SKILL.md");
  assert.match(skill, /UX_UI_STANDARD[\s\S]*new interaction baseline[\s\S]*uncertain/i);
  assert.match(skill, /FLOWS_AND_STATES[\s\S]*\bwhen\b[\s\S]*\b(?:flows|decisions|transitions)\b/i);
  const implement = skill.split("## Implement")[1]?.split("## Validate")[0] ?? "";
  assert.match(implement, /\b(?:do not|avoid|without)\b[^.!?\n]*\breplay\b[^.!?\n]*\btemplate\b/i);
  for (const name of ["ux-ui-document.template.md", "flow-state-catalog.template.md"]) {
    const template = await text("skills/ux-ui/assets/" + name);
    for (const obligation of [/Reused[\s\S]*snapshot/i, /Invalidated evidence/i, /Fresh observations\/checks[\s\S]*context[\s\S]*results/i, /Unrelated[\s\S]*evidence[\s\S]*preserved/i]) {
      assert.match(template, obligation);
    }
  }
});
