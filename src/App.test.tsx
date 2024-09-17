import { describe, expect, it } from "vitest";

describe('something truthy and falsy', () => {
  it('true to be truthy', () => {
    expect(true).toBeTruthy();
  })

  it('false to be falsy', () => {
    expect(false).toBeFalsy();
  })
})
