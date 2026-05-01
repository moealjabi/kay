export const prefixFileUrlWithBackendUrl = (fileURL?: string) => {
  return !!fileURL && fileURL.startsWith('/') ? `${window.kayona.backendURL}${fileURL}` : fileURL;
};
