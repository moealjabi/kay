const prefixFileUrlWithBackendUrl = (fileURL?: string): string | undefined => {
  return !!fileURL && fileURL.startsWith('/') ? `${window.kayona.backendURL}${fileURL}` : fileURL;
};

export { prefixFileUrlWithBackendUrl };
