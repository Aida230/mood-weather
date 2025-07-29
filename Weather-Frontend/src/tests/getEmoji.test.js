import { describe, it, expect } from 'vitest';
import { getEmoji } from '../utils/getEmoji';

describe('getEmoji', () => {
  it('devuelve ☀️ para "Clear"', () => {
    expect(getEmoji("Clear")).toBe("☀️");
  });

  it('devuelve ⛅ para "Partly Cloudy"', () => {
    expect(getEmoji("Partly Cloudy")).toBe("⛅");
  });

  it('devuelve ❔ para clima desconocido', () => {
    expect(getEmoji("TormentaGaláctica")).toBe("❔");
  });
});
