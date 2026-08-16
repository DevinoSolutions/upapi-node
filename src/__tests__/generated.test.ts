import { describe, expect, it } from 'vitest';
import { UpAPI } from '../client.js';
import { OPERATIONS, OPERATION_SLUGS } from '../generated/catalog.js';

// Public-safe assertions only: this file ships to the open-source mirror
// (DevinoSolutions/upapi-node). Anything needing the private contracts package
// or naming gated slugs lives in generated-private-parity.test.ts, which the
// mirror excludes.

describe('generated catalog', () => {
  it('is non-empty', () => {
    expect(OPERATIONS.length).toBeGreaterThan(0);
    expect(OPERATION_SLUGS.length).toBe(OPERATIONS.length);
  });

  it('is sorted by slug, so regeneration produces a stable diff', () => {
    const sorted = [...OPERATION_SLUGS].sort();
    expect(OPERATION_SLUGS).toEqual(sorted);
  });

  it('has no duplicate slugs', () => {
    expect(new Set(OPERATION_SLUGS).size).toBe(OPERATION_SLUGS.length);
  });

  it('carries a real input and output schema for every entry', () => {
    for (const op of OPERATIONS) {
      expect(op.inputSchema, `${op.slug} inputSchema`).toBeTruthy();
      expect(Object.keys(op.inputSchema).length, `${op.slug} inputSchema`).toBeGreaterThan(0);
      expect(op.outputSchema, `${op.slug} outputSchema`).toBeTruthy();
      expect(Object.keys(op.outputSchema).length, `${op.slug} outputSchema`).toBeGreaterThan(0);
    }
  });

  it('describes every entry (the description is what an MCP tool table shows)', () => {
    for (const op of OPERATIONS) {
      expect(op.name.length, `${op.slug} name`).toBeGreaterThan(0);
      expect(op.description.length, `${op.slug} description`).toBeGreaterThan(0);
      expect(op.category.length, `${op.slug} category`).toBeGreaterThan(0);
    }
  });

  it('only contains upapi-published operations', () => {
    for (const op of OPERATIONS) {
      expect(op.publishTargets, `${op.slug}`).toContain('upapi');
    }
  });

  it('assigns a positive unit weight, heavier for the expensive ops', () => {
    for (const op of OPERATIONS) {
      expect(op.unitWeight, `${op.slug}`).toBeGreaterThanOrEqual(1);
      expect(Number.isInteger(op.unitWeight), `${op.slug}`).toBe(true);
    }
  });

  it('derives operationId the same way the OpenAPI spec does', () => {
    for (const op of OPERATIONS) {
      expect(op.operationId).toBe(op.slug.replace(/[.-]/g, '_'));
    }
  });
});

describe('generated operations surface', () => {
  it('exposes exactly one callable per catalog entry', () => {
    const sdk = new UpAPI({
      apiKey: 'upapi_test',
      fetch: (async () => new Response('{}')) as never,
    });
    const methods = Object.keys(sdk.operations).sort();

    expect(methods).toEqual([...OPERATION_SLUGS].sort());
    for (const slug of OPERATION_SLUGS) {
      expect(typeof (sdk.operations as Record<string, unknown>)[slug], slug).toBe('function');
    }
  });
});
