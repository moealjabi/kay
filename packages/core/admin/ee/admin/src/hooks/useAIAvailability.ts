export const useAIAvailability = (): boolean => {
  const isAiEnabled = window.kayona.ai?.enabled !== false;
  const isEE = window.kayona?.isEE;
  const isAiFeatureEnabled = window.kayona.features.isEnabled('cms-ai');

  return !!isEE && isAiEnabled && isAiFeatureEnabled;
};
