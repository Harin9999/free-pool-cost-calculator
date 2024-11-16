interface DirectoryLinks {
  dealer_link: string;
  contractor_link: string;
  supplier_link: string;
  manufacturer_link: string;
}

export function getLocalServices(state: string, city: string): DirectoryLinks {
  const baseUrl = 'https://localpooldirectory.com';
  const formattedCity = city.toLowerCase().replace(' ', '-');
  const formattedState = state.toLowerCase();

  return {
    dealer_link: `${baseUrl}/${formattedState}/${formattedCity}/dealers`,
    contractor_link: `${baseUrl}/${formattedState}/${formattedCity}/contractors`,
    supplier_link: `${baseUrl}/${formattedState}/${formattedCity}/suppliers`,
    manufacturer_link: `${baseUrl}/${formattedState}/${formattedCity}/manufacturers`,
  };
}

export function getProductRecommendations(location: string) {
  // This will be implemented when we have the product database
  return [];
}