import { lazy } from 'react';

export function lazyWithRetry(componentImport: () => Promise<any>) {
  return lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem('page_has_been_force_refreshed') || 'false'
    );

    try {
      const component = await componentImport();
      window.sessionStorage.setItem('page_has_been_force_refreshed', 'false');
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        window.sessionStorage.setItem('page_has_been_force_refreshed', 'true');
        window.location.reload();
      }

      throw error;
    }
  });
}