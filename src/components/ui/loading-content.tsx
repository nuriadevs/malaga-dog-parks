import { useTranslations } from 'next-intl';
import { MapPin } from 'lucide-react';
import { FaPaw } from "react-icons/fa6";

/**
 * Loading content component. 
 */
export function LoadingContent() {
  const t = useTranslations("loading");

  const tAccessibility = useTranslations("accessibility");
  const tacces = tAccessibility.raw("loading");

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16" role="main" aria-label={tacces.main}>
      <div className="max-w-md w-full text-center space-y-8">
        {/* Animation loading  */}
        <div className="relative" role="status" aria-label={tacces.loadingStatus}>
          {/* Circle */}
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 border-4 border-muted rounded-full" aria-hidden="true"></div>
            <div className="absolute inset-0 border-4 border-success border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>

            {/* Central Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPaw className="w-8 h-8 text-cyan-600" aria-hidden="true" />
            </div>
          </div>
          
          {/* Points */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2" aria-hidden="true">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-success rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-success rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-success rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>

        {/* Text loading */}
        <div className="space-y-3" aria-live="polite" aria-label={tacces.loadingText}>
          <h2 className="text-xl font-semibold">
            {t('title')}
          </h2>
          <p className="text-muted-foreground">
            {t('description')}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-success rounded-full h-2 overflow-hidden" role="progressbar" aria-label={tacces.loadingProgress} aria-valuenow={undefined} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-success-to-r from-primary to-primary/60 rounded-full animate-pulse" aria-hidden="true"></div>
        </div>

        {/* Additional information */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground" aria-live="polite" aria-label={tacces.additionalInfo}>
          <MapPin className="w-4 h-4 text-cyan-600" aria-hidden="true" />
          <span>{t('loadingParks')}</span>
        </div>
      </div>
    </main>
  );
}