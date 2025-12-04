import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
    setIsLoading(false);
  }, []);

  const handleAccept = () => {
    const consent = {
      accepted: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
  };

  if (isLoading) return null;
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fadeIn">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-background border border-accent/20 rounded-lg shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-primary mb-2">
                Cookie Notice
              </h3>
              <p className="text-sm text-accent leading-relaxed">
                We use only necessary cookies for authentication and session management. 
                These cookies are required for the website to function properly. 
                For more information, see our{' '}
                <a 
                  href="/privacy" 
                  className="text-primary underline hover:text-primary/80 transition-colors"
                >
                  Privacy Policy
                </a>.
              </p>
            </div>
            
            <div className="flex gap-2 sm:flex-shrink-0">
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 text-sm font-medium bg-primary text-background rounded hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 