import { describe, it, expect } from 'vitest';
import { getMoodByWeather } from '../utils/moodLogic'; // ajusta si tu ruta es distinta

describe('getMoodByWeather', () => {
  it('debe devolver el mood correcto para "Clear"', () => {
    const result = getMoodByWeather("Clear");
    expect(result).toEqual({
      mood: "Energía positiva y claridad mental",
      activity: "Haz algo creativo al aire libre",
      quote: "“El sol no se ha puesto aún sobre tus sueños.”"
    });
  });

  it('debe devolver el mood correcto para "Thunderstorm"', () => {
    const result = getMoodByWeather("Thunderstorm");
    expect(result.activity).toContain("journaling");
    expect(result.quote).toContain("tormentas");
  });

  it('debe devolver valores por defecto para climas desconocidos', () => {
    const result = getMoodByWeather("Meteoritos");
    expect(result.mood).toBe("Abierto a lo inesperado");
    expect(result.activity).toContain("espontáneo");
    expect(result.quote).toContain("página en blanco");
  });
});
