import { createClient, type SupabaseClient } from '@supabase/supabase-js';
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
export const supabase: SupabaseClient | null = url && key ? createClient(url, key) : null;
export type LeaderboardRow = { id: string; nickname: string; score: number; depth: number; played_on: string; created_at?: string };
export async function submitScore(nickname: string, score: number, dateKey: string) {
  if (!supabase) return { ok: false as const, reason: 'not-configured' as const };
  const clean = nickname.trim().slice(0, 18) || 'Taucher';
  const { error } = await supabase.from('scores').insert({ nickname: clean, score, depth: score * 10, played_on: dateKey });
  if (error) return { ok: false as const, reason: 'error' as const, message: error.message };
  return { ok: true as const };
}
export async function fetchLeaderboard(dateKey: string): Promise<LeaderboardRow[]> {
  if (!supabase) return [];
  const { data, error } = await supabase.from('scores').select('id,nickname,score,depth,played_on,created_at').eq('played_on', dateKey).order('score', { ascending: false }).order('created_at', { ascending: true }).limit(25);
  if (error) return [];
  return (data ?? []) as LeaderboardRow[];
}
