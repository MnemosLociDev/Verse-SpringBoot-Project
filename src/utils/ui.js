export const theme = {
  brand: '#F43F5E',
  surface: '#000000',
  border: 'rgba(255,255,255,0.05)',
  glass: 'backdrop-blur-xl bg-surface-900/60 border border-white/5'
};

export const getTypeColors = (type) => {
  const themes = {
    poll: 'text-purple-400 border-purple-400/20 bg-purple-400/10',
    debate: 'text-orange-400 border-orange-400/20 bg-orange-400/10',
    petition: 'text-brand border-brand/20 bg-brand/10',
    comparison: 'text-blue-400 border-blue-400/20 bg-blue-400/10',
  };
  return themes[type.toLowerCase()] || 'text-gray-400 border-gray-400/20 bg-gray-400/10';
};

export const calculatePercentage = (votes, total) => {
  if (!total || total === 0) return 0;
  return ((votes / total) * 100).toFixed(1);
};

export const formatRelativeTime = (timestamp) => {
  const diff = Date.now() - timestamp;
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
};

