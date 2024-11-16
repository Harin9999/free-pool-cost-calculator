const TRACKING_ID = 'G-GHBN7DY7SV';

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics with performance optimizations
export function initializeAnalytics() {
  if (typeof window === 'undefined') return;

  // Create a lightweight queue before GA loads
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', TRACKING_ID, {
    send_page_view: false,
    transport_type: 'beacon',
    optimization_id: 'GTM-OPT'
  });

  // Load GA script asynchronously
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
  
  // Add script to document after main content loads
  if (document.readyState === 'complete') {
    document.head.appendChild(script);
  } else {
    window.addEventListener('load', () => {
      document.head.appendChild(script);
    });
  }
}

// Optimized tracking functions using debouncing and batching
let trackingQueue: Array<() => void> = [];
let trackingTimeout: NodeJS.Timeout;

function processTrackingQueue() {
  while (trackingQueue.length) {
    const track = trackingQueue.shift();
    track?.();
  }
}

function queueTracking(trackFn: () => void) {
  trackingQueue.push(trackFn);
  clearTimeout(trackingTimeout);
  trackingTimeout = setTimeout(processTrackingQueue, 1000);
}

export function trackPageView(path: string) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('config', TRACKING_ID, {
      page_path: path,
      page_title: document.title
    });
  });
}

export function trackCalculation(calculatorType: string, inputData: Record<string, any>) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'calculate_pool_cost', {
      event_category: 'Calculator',
      event_label: calculatorType,
      calculator_type: calculatorType,
      ...inputData
    });
  });
}

export function trackFeatureUsage(featureType: string, action: string) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'feature_interaction', {
      event_category: 'Feature',
      event_label: featureType,
      feature_type: featureType,
      action: action
    });
  });
}

export function trackFormSubmission(formType: string, success: boolean) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'form_submission', {
      event_category: 'Form',
      event_label: formType,
      form_type: formType,
      success: success
    });
  });
}

export function trackError(errorType: string, errorMessage: string) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'error_occurred', {
      event_category: 'Error',
      event_label: errorType,
      error_type: errorType,
      error_message: errorMessage
    });
  });
}

export function trackOutboundLink(url: string, label: string) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'click', {
      event_category: 'Outbound Link',
      event_label: label,
      transport_type: 'beacon',
      url: url
    });
  });
}

export function trackDownload(fileType: string, fileName: string) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'download', {
      event_category: 'Download',
      event_label: fileName,
      file_type: fileType,
      file_name: fileName
    });
  });
}

export function trackSocialInteraction(network: string, action: string) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'social_interaction', {
      event_category: 'Social',
      event_label: network,
      social_network: network,
      social_action: action
    });
  });
}

export function trackEngagementTime(timeInSeconds: number, pageType: string) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'engagement_time', {
      event_category: 'Engagement',
      event_label: pageType,
      engagement_time: timeInSeconds,
      page_type: pageType
    });
  });
}

export function trackCalculatorResults(calculatorType: string, resultData: Record<string, any>) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'calculator_results', {
      event_category: 'Results',
      event_label: calculatorType,
      calculator_type: calculatorType,
      ...resultData
    });
  });
}

export function trackUserPreference(preferenceType: string, value: string) {
  if (typeof window.gtag === 'undefined') return;

  queueTracking(() => {
    window.gtag('event', 'user_preference', {
      event_category: 'Preferences',
      event_label: preferenceType,
      preference_type: preferenceType,
      preference_value: value
    });
  });
}