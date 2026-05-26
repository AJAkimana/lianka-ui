import toast from 'react-hot-toast';

export const manualCopyFallback = (text: string) => {
  prompt('Copy your referral link:', text);
};

export const copyText = async (text: string) => {
  try {
    if (navigator.clipboard && isSecureContext) {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard');
      return;
    }
  } catch {
    // Continue to manual fallback below.
    manualCopyFallback(text);
  }
};

export const shareText = async (text: string) => {
  try {
    if (navigator.share) {
      await navigator.share({ url: text, title: 'Join Lianka' });
      return;
    }
    await copyText(text);
  } catch {
    await copyText(text);
  }
};
