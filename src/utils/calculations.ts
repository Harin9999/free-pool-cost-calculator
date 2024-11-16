interface PoolDimensions {
  length: number;
  width: number;
  depth: number;
  type: string;
  features: string[];
}

// Enhanced cost factors based on real market data
const BASE_COSTS = {
  concrete: {
    base: 55,
    installation: 1.3,
    maintenance: 1.2
  },
  fiberglass: {
    base: 48,
    installation: 1.2,
    maintenance: 1.1
  },
  vinyl: {
    base: 38,
    installation: 1.15,
    maintenance: 1.05
  }
};

const FEATURE_COSTS = {
  heater: {
    cost: 3500,
    installation: 800,
    yearly_maintenance: 200
  },
  lighting: {
    cost: 1800,
    installation: 500,
    yearly_maintenance: 100
  },
  cover: {
    cost: 2800,
    installation: 400,
    yearly_maintenance: 150
  },
  saltwater: {
    cost: 2200,
    installation: 600,
    yearly_maintenance: 300
  }
};

const LOCATION_FACTORS: Record<string, number> = {
  CA: 1.4,
  NY: 1.35,
  FL: 1.2,
  TX: 1.15,
  // Default factor for other states
  DEFAULT: 1.1
};

export function calculatePoolCost(dimensions: PoolDimensions, state?: string): {
  totalCost: number;
  breakdown: {
    baseCost: number;
    featuresCost: number;
    laborCost: number;
    permitsCost: number;
    yearlyMaintenance: number;
  };
} {
  // Calculate volume in cubic feet
  const volume = dimensions.length * dimensions.width * dimensions.depth;
  
  // Get pool type costs
  const poolType = BASE_COSTS[dimensions.type as keyof typeof BASE_COSTS] || BASE_COSTS.concrete;
  
  // Calculate base construction cost
  const baseCost = volume * poolType.base;
  
  // Apply location factor
  const locationFactor = LOCATION_FACTORS[state || 'DEFAULT'];
  const adjustedBaseCost = baseCost * locationFactor;

  // Calculate features cost with installation
  const featuresCosts = dimensions.features.reduce((total, feature) => {
    const featureData = FEATURE_COSTS[feature as keyof typeof FEATURE_COSTS];
    return total + (featureData ? featureData.cost + featureData.installation : 0);
  }, 0);

  // Calculate yearly maintenance
  const yearlyMaintenance = dimensions.features.reduce((total, feature) => {
    const featureData = FEATURE_COSTS[feature as keyof typeof FEATURE_COSTS];
    return total + (featureData ? featureData.yearly_maintenance : 0);
  }, baseCost * 0.05); // Base pool maintenance

  // Calculate labor and permits
  const laborCost = adjustedBaseCost * (poolType.installation - 1);
  const permitsCost = adjustedBaseCost * 0.06;

  const totalCost = adjustedBaseCost + featuresCosts + laborCost + permitsCost;

  return {
    totalCost: Math.round(totalCost),
    breakdown: {
      baseCost: Math.round(adjustedBaseCost),
      featuresCost: Math.round(featuresCosts),
      laborCost: Math.round(laborCost),
      permitsCost: Math.round(permitsCost),
      yearlyMaintenance: Math.round(yearlyMaintenance)
    }
  };
}