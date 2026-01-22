// Theme-specific content exports
// Each theme has CISO-pain-point-optimized copy with first-person CTAs

export { digitalTopographyContent } from './digital-topography';
export { swissIntelligenceContent } from './swiss-intelligence';
export { forensicCleanroomContent } from './forensic-cleanroom';
export { bioluminescentDeepContent } from './bioluminescent-deep';
export { intelligenceDossierContent } from './intelligence-dossier';
export { publicHealthContent } from './public-health';
export { artDecoContent } from './art-deco';
export { natureDocumentaryContent } from './nature-documentary';
export { missionControlContent } from './mission-control';
export { brightConfidenceContent } from './bright-confidence';
export { luxuryConciergeContent } from './luxury-concierge';

// Content map for dynamic access
export const themeContent = {
  'digital-topography': () => import('./digital-topography').then(m => m.digitalTopographyContent),
  'swiss-intelligence': () => import('./swiss-intelligence').then(m => m.swissIntelligenceContent),
  'forensic-cleanroom': () => import('./forensic-cleanroom').then(m => m.forensicCleanroomContent),
  'bioluminescent-deep': () => import('./bioluminescent-deep').then(m => m.bioluminescentDeepContent),
  'intelligence-dossier': () => import('./intelligence-dossier').then(m => m.intelligenceDossierContent),
  'public-health': () => import('./public-health').then(m => m.publicHealthContent),
  'art-deco': () => import('./art-deco').then(m => m.artDecoContent),
  'nature-documentary': () => import('./nature-documentary').then(m => m.natureDocumentaryContent),
  'mission-control': () => import('./mission-control').then(m => m.missionControlContent),
  'bright-confidence': () => import('./bright-confidence').then(m => m.brightConfidenceContent),
  'luxury-concierge': () => import('./luxury-concierge').then(m => m.luxuryConciergeContent),
} as const;

export type ThemeId = keyof typeof themeContent;
