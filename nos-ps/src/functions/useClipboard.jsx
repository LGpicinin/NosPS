import { useCallback } from 'react';
function useClipboard() {
  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Texto copiado para a área de transferência');
    } catch (err) {
      console.log('Falha ao copiar o texto', err);
    }
  }, []);
  return copyToClipboard;
}
export default useClipboard;