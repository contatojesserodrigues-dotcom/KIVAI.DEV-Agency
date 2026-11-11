import { describe, expect, it } from 'vitest';
import { agents, filterAgents, publicAgentPrice } from '@/lib/agents';

describe('Agent starting monthly USD prices', () => {
 for (const [id, price] of [['legal',399],['accounting',399],['sales',799],['support',89],['executive',199],['hr',299],['real-estate',299],['ecommerce',199],['documents',249],['logistics',499]] as const) {
  it(`${id} starts at $${price}/month`, () => expect(agents.find(a => a.id === id)?.price).toBe(price));
 }
});
describe('Agent filtering', () => {
 it('includes the full initial catalogue', () => expect(filterAgents('All Agents')).toHaveLength(12));
 it('returns both administration agents', () => expect(filterAgents('Administration').map(a => a.id)).toEqual(['executive','documents']));
 it('combines category and case-insensitive task search', () => expect(filterAgents('Legal','CLIENT INTAKE').map(a => a.id)).toEqual(['legal']));
 it('returns no matches for unrelated searches', () => expect(filterAgents('Legal','shipment')).toEqual([]));
});

describe('Deployment pricing and new agent categories', () => {
 it('does not publish unapproved subscription prices', () => expect(agents.map(publicAgentPrice)).toEqual(Array(12).fill(undefined)));
 it('only exposes an explicitly approved agent price', () => expect(publicAgentPrice({ ...agents[0], id: 'approved', name: 'Approved', category: 'Legal', image: '', description: '', tasks: [], integrations: '', approval: '', price: 399, publicPriceApproved: true })).toBe(399));
 it('finds healthcare administration agents', () => expect(filterAgents('Healthcare & Medical Administration').map(a => a.id)).toEqual(['healthcare']));
 it('finds veterinary agents', () => expect(filterAgents('Veterinary & Pet Care').map(a => a.id)).toEqual(['veterinary']));
});
